var searchIndex = {};
searchIndex['clipboard_win'] = {"items":[[0,"","clipboard_win","Clipboard WinAPI",null,null],[3,"WinResult","","Represents Windows result.",null,null],[3,"ClipboardManager","","Clipboard manager provides a primitive hack for console application to handle updates of\nclipboard. It uses ```get_clipboard_seq_num``` to determines whatever clipboard is updated or\nnot. Due to that this manager is a bit hacky and not exactly right way to properly work with\nclipboard. On other hand it is the best and most easy option for console application as a proper\nwindow is required to be created to work with clipboard.",null,null],[5,"set_clipboard","","Set clipboard with text.",null,{"inputs":[{"name":"t"}],"output":{"name":"winresult"}}],[5,"rust_strlen","","Rust variant of strlen.",null,null],[5,"get_clipboard_string","","Extracts clipboard content and convert it to String.",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_clipboard_formats","","Extracts available clipboard formats.",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_format_name","","Returns format name based on it's code.",null,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[0,"wrapper","","Provides direct wrappers to WinAPI functions.",null,null],[5,"get_clipboard_seq_num","clipboard_win::wrapper","Wrapper around ```GetClipboardSequenceNumber```.",null,{"inputs":[],"output":{"name":"option"}}],[5,"open_clipboard","","Wrapper around ```OpenClipboard```.",null,{"inputs":[],"output":{"name":"winresult"}}],[5,"close_clipboard","","Wrapper around ```CloseClipboard```.",null,{"inputs":[],"output":{"name":"winresult"}}],[5,"empty_clipboard","","Wrapper around ```EmptyClipboard```.",null,{"inputs":[],"output":{"name":"winresult"}}],[5,"set_clipboard","","Wrapper around ```SetClipboardData```.",null,{"inputs":[{"name":"t"}],"output":{"name":"winresult"}}],[5,"get_clipboard_string","","Wrapper around ```GetClipboardData```.",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_clipboard_formats","","Extracts available clipboard formats.",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_format_name","","Returns format name based on it's code.",null,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"clone","clipboard_win","",0,{"inputs":[{"name":"winresult"}],"output":{"name":"winresult"}}],[11,"fmt","","",0,{"inputs":[{"name":"winresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Custom errors\nConstructs new error.",0,{"inputs":[{"name":"winresult"},{"name":"u32"}],"output":{"name":"winresult"}}],[11,"is_ok","","Returns ```true``` if result is ok",0,{"inputs":[{"name":"winresult"}],"output":{"name":"bool"}}],[11,"is_err","","Returns ```true``` if result is not ok",0,{"inputs":[{"name":"winresult"}],"output":{"name":"bool"}}],[11,"errno","","Returns extended error code. Should be used in case if result is not ok.",0,{"inputs":[{"name":"winresult"}],"output":{"name":"u32"}}],[11,"errno_desc","","Returns description of WinAPI error code.",0,{"inputs":[{"name":"winresult"}],"output":{"name":"string"}}],[11,"eq","","",0,{"inputs":[{"name":"winresult"},{"name":"winresult"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"winresult"},{"name":"winresult"}],"output":{"name":"bool"}}],[11,"new","","Constructs new ClipboardManager with default settings",1,{"inputs":[{"name":"clipboardmanager"}],"output":{"name":"clipboardmanager"}}],[11,"delay","","Configure manager's delay between accessing clipboard.",1,{"inputs":[{"name":"clipboardmanager"},{"name":"u32"}],"output":{"name":"clipboardmanager"}}],[11,"ok_callback","","Sets callback for successfully retrieved clipboard's text.",1,null],[11,"err_callback","","Sets callback for failed retrieval of clipboard's text.",1,null],[11,"run","","Starts manager loop.",1,null]],"paths":[[3,"WinResult"],[3,"ClipboardManager"]]};
initSearch(searchIndex);
