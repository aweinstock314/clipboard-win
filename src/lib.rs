//! Clipboard WIN API
//!
//! This crate provide simple means to operate with Windows clipboard.
//!
//! To use:
//! ```
//! extern crate clipboard_win;
//! ```

extern crate winapi;
extern crate user32;
extern crate kernel32;

//rust
use std::os::windows::ffi::OsStrExt;

//WINAPI
//types
use winapi::minwindef::{HGLOBAL, UINT};
use winapi::wchar_t; //u16
use winapi::winnt::HANDLE;
use winapi::basetsd::SIZE_T;
//functions
use kernel32::{GlobalAlloc, GlobalLock, GlobalUnlock, GetLastError};
use user32::{SetClipboardData, EmptyClipboard, OpenClipboard, GetClipboardData, CloseClipboard};

///Set clipboard with text.
pub fn set_clipboard<T: ?Sized + AsRef<std::ffi::OsStr>>(text: &T) {
    let format: UINT = 13; //unicode
    let ghnd: UINT = 66; //GHND + GPTR
    let text = text.as_ref();
    unsafe {
        //allocate buffer and copy string to it.
        let utf16_buff: Vec<u16> = text.encode_wide().collect();
        println!("utf16_buff len()={}", utf16_buff.len());
        let len: usize = (utf16_buff.len() + 1) * 2;
        println!("Allocate len={}", len);
        let handler: HGLOBAL = GlobalAlloc(ghnd, len as SIZE_T);
        println!("GlobalAlloc lasterror={}", GetLastError());
        let lock = GlobalLock(handler) as *mut u16;
        println!("GlobalLock lasterror={}", GetLastError());

        let len: usize = (len -1) / 2;
                                      //src,               dest, len
        std::ptr::copy_nonoverlapping(utf16_buff.as_ptr(), lock, len);
        let len: isize = len as isize;
        *lock.offset(len) = 0;
        println!("String len={}", len);
        println!("win buffer: {:?}", lock);
        for idx in (0..rust_strlen(lock)) {
            print!("{:?}: buff[{}]={} | ", lock.offset(idx as isize), idx, *lock.offset(idx as isize));
        }
        println!("");
        println!("{:?}: buff[{}]={}", lock.offset(len), len, *lock.offset(len));

        GlobalUnlock(handler);
        println!("GlobalUnlock lasterror={}", GetLastError());

        //Set new clipboard text.
        OpenClipboard(std::ptr::null_mut());
        println!("OpenClipboard lasterror={}", GetLastError());
        EmptyClipboard();
        println!("EmptyClipboard lasterror={}", GetLastError());
        SetClipboardData(format, handler);
        println!("SetClipboardData lasterror={}", GetLastError());
        CloseClipboard();
        println!("CloseClipboard lasterror={}", GetLastError());
    }
}

///Rust variant of strlen.
///
///* ```buff_p``` Must be valid non-NULL pointer.
#[inline(always)]
pub unsafe fn rust_strlen(buff_p: *const u16) -> usize {
    let mut idx: isize = 0;
    while *buff_p.offset(idx) != 0 { idx += 1; }
    idx as usize
}

///Extracts clipboard content and convert it to String.
pub fn get_clipboard() -> Result<String, std::string::FromUtf16Error> {
    let cf_unicodetext: UINT = 13;
    let result: Result<String, std::string::FromUtf16Error>;
    unsafe {
        OpenClipboard(std::ptr::null_mut());

        let text_handler: HANDLE = GetClipboardData(cf_unicodetext);
        let text_p = GlobalLock(text_handler) as *const wchar_t;
        let len: usize = rust_strlen(text_p);
        let text_s = std::slice::from_raw_parts(text_p, len);

        result = String::from_utf16(text_s);
        GlobalUnlock(text_handler);
        CloseClipboard();
    }
    result
}
