var searchIndex = {};
searchIndex['clipboard_win'] = {"items":[[0,"","clipboard_win","Clipboard WinAPI",null,null],[3,"WinResult","","Represents Windows result.",null,null],[3,"ClipboardManager","","Clipboard manager provides a primitive hack for console application to handle updates of\nclipboard. It uses ```get_clipboard_seq_num``` to determines whatever clipboard is updated or\nnot. Due to that this manager is a bit hacky and not exactly right way to properly work with\nclipboard. On other hand it is the best and most easy option for console application as a proper\nwindow is required to be created to work with clipboard.",null,null],[5,"set_clipboard","","Set clipboard with text.",null,{"inputs":[{"name":"t"}],"output":{"name":"winresult"}}],[5,"rust_strlen","","Rust variant of strlen.",null,null],[5,"get_clipboard","","Extracts clipboard content and convert it to String.",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_clipboard_formats","","Extracts available clipboard formats.",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_format_name","","Returns format name based on it's code.",null,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[0,"wrapper","","Provides direct wrappers to WinAPI functions.",null,null],[5,"get_clipboard_seq_num","clipboard_win::wrapper","Wrapper around ```GetClipboardSequenceNumber```.",null,{"inputs":[],"output":{"name":"option"}}],[5,"open_clipboard","","Wrapper around ```OpenClipboard```.",null,{"inputs":[],"output":{"name":"winresult"}}],[5,"close_clipboard","","Wrapper around ```CloseClipboard```.",null,{"inputs":[],"output":{"name":"winresult"}}],[5,"empty_clipboard","","Wrapper around ```EmptyClipboard```.",null,{"inputs":[],"output":{"name":"winresult"}}],[5,"set_clipboard","","Wrapper around ```SetClipboardData```.",null,{"inputs":[{"name":"t"}],"output":{"name":"winresult"}}],[5,"get_clipboard","","Wrapper around ```GetClipboardData```.",null,{"inputs":[],"output":{"name":"result"}}],[11,"clone","clipboard_win","",0,{"inputs":[{"name":"winresult"}],"output":{"name":"winresult"}}],[11,"fmt","","",0,{"inputs":[{"name":"winresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Constructs new error.",0,{"inputs":[{"name":"winresult"},{"name":"u32"}],"output":{"name":"winresult"}}],[11,"is_ok","","Returns ```true``` if result is ok",0,{"inputs":[{"name":"winresult"}],"output":{"name":"bool"}}],[11,"is_not_ok","","Returns ```true``` if result is not ok",0,{"inputs":[{"name":"winresult"}],"output":{"name":"bool"}}],[11,"errno","","Returns extended error code. Should be used in case if result is not ok.",0,{"inputs":[{"name":"winresult"}],"output":{"name":"u32"}}],[11,"errno_desc","","Returns description of WinAPI error code.",0,{"inputs":[{"name":"winresult"}],"output":{"name":"string"}}],[11,"eq","","",0,{"inputs":[{"name":"winresult"},{"name":"winresult"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"winresult"},{"name":"winresult"}],"output":{"name":"bool"}}],[11,"new","","Constructs new ClipboardManager with default settings",1,{"inputs":[{"name":"clipboardmanager"}],"output":{"name":"clipboardmanager"}}],[11,"delay","","Configure manager's delay between accessing clipboard.",1,{"inputs":[{"name":"clipboardmanager"},{"name":"u32"}],"output":{"name":"clipboardmanager"}}],[11,"ok_callback","","Sets callback for successfully retrieved clipboard's text.",1,null],[11,"err_callback","","Sets callback for failed retrieval of clipboard's text.",1,null],[11,"run","","Starts manager loop.",1,null]],"paths":[[3,"WinResult"],[3,"ClipboardManager"]]};
searchIndex['libc'] = {"items":[[0,"","libc","Bindings for the C standard library and other platform libraries",null,null],[0,"types","","",null,null],[0,"common","libc::types","",null,null],[0,"c95","libc::types::common","",null,null],[4,"c_void","libc::types::common::c95","Type used to construct void pointers for use with C.",null,null],[13,"__variant1","","",0,null],[13,"__variant2","","",0,null],[4,"FILE","","",null,null],[4,"fpos_t","","",null,null],[0,"c99","libc::types::common","",null,null],[6,"int8_t","libc::types::common::c99","",null,null],[6,"int16_t","","",null,null],[6,"int32_t","","",null,null],[6,"int64_t","","",null,null],[6,"uint8_t","","",null,null],[6,"uint16_t","","",null,null],[6,"uint32_t","","",null,null],[6,"uint64_t","","",null,null],[0,"posix88","libc::types::common","",null,null],[4,"DIR","libc::types::common::posix88","",null,null],[4,"dirent_t","","",null,null],[0,"os","libc::types","",null,null],[0,"common","libc::types::os","",null,null],[0,"posix01","libc::types::os::common","",null,null],[3,"stat","libc::types::os::common::posix01","",null,null],[12,"st_dev","","",1,null],[12,"st_ino","","",1,null],[12,"st_mode","","",1,null],[12,"st_nlink","","",1,null],[12,"st_uid","","",1,null],[12,"st_gid","","",1,null],[12,"st_rdev","","",1,null],[12,"st_size","","",1,null],[12,"st_atime","","",1,null],[12,"st_mtime","","",1,null],[12,"st_ctime","","",1,null],[3,"utimbuf","","",null,null],[12,"actime","","",2,null],[12,"modtime","","",2,null],[3,"timeval","","",null,null],[12,"tv_sec","","",3,null],[12,"tv_usec","","",3,null],[3,"timespec","","",null,null],[12,"tv_sec","","",4,null],[12,"tv_nsec","","",4,null],[4,"timezone","","",null,null],[11,"clone","","",1,{"inputs":[{"name":"stat"}],"output":{"name":"stat"}}],[11,"clone","","",2,{"inputs":[{"name":"utimbuf"}],"output":{"name":"utimbuf"}}],[11,"clone","","",3,{"inputs":[{"name":"timeval"}],"output":{"name":"timeval"}}],[11,"clone","","",4,{"inputs":[{"name":"timespec"}],"output":{"name":"timespec"}}],[0,"bsd44","libc::types::os::common","",null,null],[3,"sockaddr","libc::types::os::common::bsd44","",null,null],[12,"sa_family","","",5,null],[12,"sa_data","","",5,null],[3,"sockaddr_storage","","",null,null],[12,"ss_family","","",6,null],[12,"__ss_pad1","","",6,null],[12,"__ss_align","","",6,null],[12,"__ss_pad2","","",6,null],[3,"sockaddr_in","","",null,null],[12,"sin_family","","",7,null],[12,"sin_port","","",7,null],[12,"sin_addr","","",7,null],[12,"sin_zero","","",7,null],[3,"in_addr","","",null,null],[12,"s_addr","","",8,null],[3,"sockaddr_in6","","",null,null],[12,"sin6_family","","",9,null],[12,"sin6_port","","",9,null],[12,"sin6_flowinfo","","",9,null],[12,"sin6_addr","","",9,null],[12,"sin6_scope_id","","",9,null],[3,"in6_addr","","",null,null],[12,"s6_addr","","",10,null],[3,"ip_mreq","","",null,null],[12,"imr_multiaddr","","",11,null],[12,"imr_interface","","",11,null],[3,"ip6_mreq","","",null,null],[12,"ipv6mr_multiaddr","","",12,null],[12,"ipv6mr_interface","","",12,null],[3,"addrinfo","","",null,null],[12,"ai_flags","","",13,null],[12,"ai_family","","",13,null],[12,"ai_socktype","","",13,null],[12,"ai_protocol","","",13,null],[12,"ai_addrlen","","",13,null],[12,"ai_canonname","","",13,null],[12,"ai_addr","","",13,null],[12,"ai_next","","",13,null],[3,"sockaddr_un","","",null,null],[12,"sun_family","","",14,null],[12,"sun_path","","",14,null],[6,"SOCKET","","",null,null],[6,"socklen_t","","",null,null],[6,"sa_family_t","","",null,null],[6,"in_port_t","","",null,null],[6,"in_addr_t","","",null,null],[11,"clone","","",5,{"inputs":[{"name":"sockaddr"}],"output":{"name":"sockaddr"}}],[11,"clone","","",6,{"inputs":[{"name":"sockaddr_storage"}],"output":{"name":"sockaddr_storage"}}],[11,"clone","","",7,{"inputs":[{"name":"sockaddr_in"}],"output":{"name":"sockaddr_in"}}],[11,"clone","","",8,{"inputs":[{"name":"in_addr"}],"output":{"name":"in_addr"}}],[11,"clone","","",9,{"inputs":[{"name":"sockaddr_in6"}],"output":{"name":"sockaddr_in6"}}],[11,"clone","","",10,{"inputs":[{"name":"in6_addr"}],"output":{"name":"in6_addr"}}],[11,"clone","","",11,{"inputs":[{"name":"ip_mreq"}],"output":{"name":"ip_mreq"}}],[11,"clone","","",12,{"inputs":[{"name":"ip6_mreq"}],"output":{"name":"ip6_mreq"}}],[11,"clone","","",13,{"inputs":[{"name":"addrinfo"}],"output":{"name":"addrinfo"}}],[11,"clone","","",14,{"inputs":[{"name":"sockaddr_un"}],"output":{"name":"sockaddr_un"}}],[0,"arch","libc::types::os","",null,null],[0,"c95","libc::types::os::arch","",null,null],[6,"c_char","libc::types::os::arch::c95","",null,null],[6,"c_schar","","",null,null],[6,"c_uchar","","",null,null],[6,"c_short","","",null,null],[6,"c_ushort","","",null,null],[6,"c_int","","",null,null],[6,"c_uint","","",null,null],[6,"c_long","","",null,null],[6,"c_ulong","","",null,null],[6,"c_float","","",null,null],[6,"c_double","","",null,null],[6,"size_t","","",null,null],[6,"ptrdiff_t","","",null,null],[6,"clock_t","","",null,null],[6,"time_t","","",null,null],[6,"suseconds_t","","",null,null],[6,"wchar_t","","",null,null],[0,"c99","libc::types::os::arch","",null,null],[6,"c_longlong","libc::types::os::arch::c99","",null,null],[6,"c_ulonglong","","",null,null],[6,"intptr_t","","",null,null],[6,"uintptr_t","","",null,null],[6,"intmax_t","","",null,null],[6,"uintmax_t","","",null,null],[0,"posix88","libc::types::os::arch","",null,null],[6,"off_t","libc::types::os::arch::posix88","",null,null],[6,"dev_t","","",null,null],[6,"ino_t","","",null,null],[6,"pid_t","","",null,null],[6,"useconds_t","","",null,null],[6,"mode_t","","",null,null],[6,"ssize_t","","",null,null],[0,"extra","libc::types::os::arch","",null,null],[3,"SECURITY_ATTRIBUTES","libc::types::os::arch::extra","",null,null],[12,"nLength","","",15,null],[12,"lpSecurityDescriptor","","",15,null],[12,"bInheritHandle","","",15,null],[3,"STARTUPINFO","","",null,null],[12,"cb","","",16,null],[12,"lpReserved","","",16,null],[12,"lpDesktop","","",16,null],[12,"lpTitle","","",16,null],[12,"dwX","","",16,null],[12,"dwY","","",16,null],[12,"dwXSize","","",16,null],[12,"dwYSize","","",16,null],[12,"dwXCountChars","","",16,null],[12,"dwYCountCharts","","",16,null],[12,"dwFillAttribute","","",16,null],[12,"dwFlags","","",16,null],[12,"wShowWindow","","",16,null],[12,"cbReserved2","","",16,null],[12,"lpReserved2","","",16,null],[12,"hStdInput","","",16,null],[12,"hStdOutput","","",16,null],[12,"hStdError","","",16,null],[3,"PROCESS_INFORMATION","","",null,null],[12,"hProcess","","",17,null],[12,"hThread","","",17,null],[12,"dwProcessId","","",17,null],[12,"dwThreadId","","",17,null],[3,"SYSTEM_INFO","","",null,null],[12,"wProcessorArchitecture","","",18,null],[12,"wReserved","","",18,null],[12,"dwPageSize","","",18,null],[12,"lpMinimumApplicationAddress","","",18,null],[12,"lpMaximumApplicationAddress","","",18,null],[12,"dwActiveProcessorMask","","",18,null],[12,"dwNumberOfProcessors","","",18,null],[12,"dwProcessorType","","",18,null],[12,"dwAllocationGranularity","","",18,null],[12,"wProcessorLevel","","",18,null],[12,"wProcessorRevision","","",18,null],[3,"MEMORY_BASIC_INFORMATION","","",null,null],[12,"BaseAddress","","",19,null],[12,"AllocationBase","","",19,null],[12,"AllocationProtect","","",19,null],[12,"RegionSize","","",19,null],[12,"State","","",19,null],[12,"Protect","","",19,null],[12,"Type","","",19,null],[3,"OVERLAPPED","","",null,null],[12,"Internal","","",20,null],[12,"InternalHigh","","",20,null],[12,"Offset","","",20,null],[12,"OffsetHigh","","",20,null],[12,"hEvent","","",20,null],[3,"FILETIME","","",null,null],[12,"dwLowDateTime","","",21,null],[12,"dwHighDateTime","","",21,null],[3,"GUID","","",null,null],[12,"Data1","","",22,null],[12,"Data2","","",22,null],[12,"Data3","","",22,null],[12,"Data4","","",22,null],[3,"WSAPROTOCOLCHAIN","","",null,null],[12,"ChainLen","","",23,null],[12,"ChainEntries","","",23,null],[3,"WSAPROTOCOL_INFO","","",null,null],[12,"dwServiceFlags1","","",24,null],[12,"dwServiceFlags2","","",24,null],[12,"dwServiceFlags3","","",24,null],[12,"dwServiceFlags4","","",24,null],[12,"dwProviderFlags","","",24,null],[12,"ProviderId","","",24,null],[12,"dwCatalogEntryId","","",24,null],[12,"ProtocolChain","","",24,null],[12,"iVersion","","",24,null],[12,"iAddressFamily","","",24,null],[12,"iMaxSockAddr","","",24,null],[12,"iMinSockAddr","","",24,null],[12,"iSocketType","","",24,null],[12,"iProtocol","","",24,null],[12,"iProtocolMaxOffset","","",24,null],[12,"iNetworkByteOrder","","",24,null],[12,"iSecurityScheme","","",24,null],[12,"dwMessageSize","","",24,null],[12,"dwProviderReserved","","",24,null],[12,"szProtocol","","",24,null],[3,"WIN32_FIND_DATAW","","",null,null],[12,"dwFileAttributes","","",25,null],[12,"ftCreationTime","","",25,null],[12,"ftLastAccessTime","","",25,null],[12,"ftLastWriteTime","","",25,null],[12,"nFileSizeHigh","","",25,null],[12,"nFileSizeLow","","",25,null],[12,"dwReserved0","","",25,null],[12,"dwReserved1","","",25,null],[12,"cFileName","","",25,null],[12,"cAlternateFileName","","",25,null],[6,"BOOL","","",null,null],[6,"BYTE","","",null,null],[6,"BOOLEAN","","",null,null],[6,"CCHAR","","",null,null],[6,"CHAR","","",null,null],[6,"DWORD","","",null,null],[6,"DWORDLONG","","",null,null],[6,"HANDLE","","",null,null],[6,"HINSTANCE","","",null,null],[6,"HMODULE","","",null,null],[6,"LONG","","",null,null],[6,"PLONG","","",null,null],[6,"LONG_PTR","","",null,null],[6,"LARGE_INTEGER","","",null,null],[6,"PLARGE_INTEGER","","",null,null],[6,"LPCWSTR","","",null,null],[6,"LPCSTR","","",null,null],[6,"LPWSTR","","",null,null],[6,"LPSTR","","",null,null],[6,"LPWCH","","",null,null],[6,"LPCH","","",null,null],[6,"LPSECURITY_ATTRIBUTES","","",null,null],[6,"LPVOID","","",null,null],[6,"LPCVOID","","",null,null],[6,"LPBYTE","","",null,null],[6,"LPWORD","","",null,null],[6,"LPDWORD","","",null,null],[6,"LPHANDLE","","",null,null],[6,"LRESULT","","",null,null],[6,"PBOOL","","",null,null],[6,"WCHAR","","",null,null],[6,"WORD","","",null,null],[6,"SIZE_T","","",null,null],[6,"time64_t","","",null,null],[6,"int64","","",null,null],[6,"LPSTARTUPINFO","","",null,null],[6,"LPPROCESS_INFORMATION","","",null,null],[6,"LPSYSTEM_INFO","","",null,null],[6,"LPMEMORY_BASIC_INFORMATION","","",null,null],[6,"LPOVERLAPPED","","",null,null],[6,"LPFILETIME","","",null,null],[6,"LPWSAPROTOCOLCHAIN","","",null,null],[6,"LPWSAPROTOCOL_INFO","","",null,null],[6,"GROUP","","",null,null],[6,"LPWIN32_FIND_DATAW","","",null,null],[11,"clone","","",15,{"inputs":[{"name":"security_attributes"}],"output":{"name":"security_attributes"}}],[11,"clone","","",16,{"inputs":[{"name":"startupinfo"}],"output":{"name":"startupinfo"}}],[11,"clone","","",17,{"inputs":[{"name":"process_information"}],"output":{"name":"process_information"}}],[11,"clone","","",18,{"inputs":[{"name":"system_info"}],"output":{"name":"system_info"}}],[11,"clone","","",19,{"inputs":[{"name":"memory_basic_information"}],"output":{"name":"memory_basic_information"}}],[11,"clone","","",20,{"inputs":[{"name":"overlapped"}],"output":{"name":"overlapped"}}],[11,"clone","","",21,{"inputs":[{"name":"filetime"}],"output":{"name":"filetime"}}],[11,"clone","","",22,{"inputs":[{"name":"guid"}],"output":{"name":"guid"}}],[11,"clone","","",23,{"inputs":[{"name":"wsaprotocolchain"}],"output":{"name":"wsaprotocolchain"}}],[11,"clone","","",24,{"inputs":[{"name":"wsaprotocol_info"}],"output":{"name":"wsaprotocol_info"}}],[11,"clone","","",25,{"inputs":[{"name":"win32_find_dataw"}],"output":{"name":"win32_find_dataw"}}],[0,"consts","libc","",null,null],[0,"os","libc::consts","",null,null],[0,"c95","libc::consts::os","",null,null],[17,"EXIT_FAILURE","libc::consts::os::c95","",null,null],[17,"EXIT_SUCCESS","","",null,null],[17,"RAND_MAX","","",null,null],[17,"EOF","","",null,null],[17,"SEEK_SET","","",null,null],[17,"SEEK_CUR","","",null,null],[17,"SEEK_END","","",null,null],[17,"_IOFBF","","",null,null],[17,"_IONBF","","",null,null],[17,"_IOLBF","","",null,null],[17,"BUFSIZ","","",null,null],[17,"FOPEN_MAX","","",null,null],[17,"FILENAME_MAX","","",null,null],[17,"L_tmpnam","","",null,null],[17,"TMP_MAX","","",null,null],[17,"WSAEINTR","","",null,null],[17,"WSAEBADF","","",null,null],[17,"WSAEACCES","","",null,null],[17,"WSAEFAULT","","",null,null],[17,"WSAEINVAL","","",null,null],[17,"WSAEMFILE","","",null,null],[17,"WSAEWOULDBLOCK","","",null,null],[17,"WSAEINPROGRESS","","",null,null],[17,"WSAEALREADY","","",null,null],[17,"WSAENOTSOCK","","",null,null],[17,"WSAEDESTADDRREQ","","",null,null],[17,"WSAEMSGSIZE","","",null,null],[17,"WSAEPROTOTYPE","","",null,null],[17,"WSAENOPROTOOPT","","",null,null],[17,"WSAEPROTONOSUPPORT","","",null,null],[17,"WSAESOCKTNOSUPPORT","","",null,null],[17,"WSAEOPNOTSUPP","","",null,null],[17,"WSAEPFNOSUPPORT","","",null,null],[17,"WSAEAFNOSUPPORT","","",null,null],[17,"WSAEADDRINUSE","","",null,null],[17,"WSAEADDRNOTAVAIL","","",null,null],[17,"WSAENETDOWN","","",null,null],[17,"WSAENETUNREACH","","",null,null],[17,"WSAENETRESET","","",null,null],[17,"WSAECONNABORTED","","",null,null],[17,"WSAECONNRESET","","",null,null],[17,"WSAENOBUFS","","",null,null],[17,"WSAEISCONN","","",null,null],[17,"WSAENOTCONN","","",null,null],[17,"WSAESHUTDOWN","","",null,null],[17,"WSAETOOMANYREFS","","",null,null],[17,"WSAETIMEDOUT","","",null,null],[17,"WSAECONNREFUSED","","",null,null],[17,"WSAELOOP","","",null,null],[17,"WSAENAMETOOLONG","","",null,null],[17,"WSAEHOSTDOWN","","",null,null],[17,"WSAEHOSTUNREACH","","",null,null],[17,"WSAENOTEMPTY","","",null,null],[17,"WSAEPROCLIM","","",null,null],[17,"WSAEUSERS","","",null,null],[17,"WSAEDQUOT","","",null,null],[17,"WSAESTALE","","",null,null],[17,"WSAEREMOTE","","",null,null],[17,"WSASYSNOTREADY","","",null,null],[17,"WSAVERNOTSUPPORTED","","",null,null],[17,"WSANOTINITIALISED","","",null,null],[17,"WSAEDISCON","","",null,null],[17,"WSAENOMORE","","",null,null],[17,"WSAECANCELLED","","",null,null],[17,"WSAEINVALIDPROCTABLE","","",null,null],[17,"WSAEINVALIDPROVIDER","","",null,null],[17,"WSAEPROVIDERFAILEDINIT","","",null,null],[0,"posix88","libc::consts::os","",null,null],[17,"O_RDONLY","libc::consts::os::posix88","",null,null],[17,"O_WRONLY","","",null,null],[17,"O_RDWR","","",null,null],[17,"O_APPEND","","",null,null],[17,"O_CREAT","","",null,null],[17,"O_EXCL","","",null,null],[17,"O_TRUNC","","",null,null],[17,"S_IFIFO","","",null,null],[17,"S_IFCHR","","",null,null],[17,"S_IFBLK","","",null,null],[17,"S_IFDIR","","",null,null],[17,"S_IFREG","","",null,null],[17,"S_IFLNK","","",null,null],[17,"S_IFMT","","",null,null],[17,"S_IEXEC","","",null,null],[17,"S_IWRITE","","",null,null],[17,"S_IREAD","","",null,null],[17,"S_IRWXU","","",null,null],[17,"S_IXUSR","","",null,null],[17,"S_IWUSR","","",null,null],[17,"S_IRUSR","","",null,null],[17,"S_IRWXG","","",null,null],[17,"S_IXGRP","","",null,null],[17,"S_IWGRP","","",null,null],[17,"S_IRGRP","","",null,null],[17,"S_IRWXO","","",null,null],[17,"S_IXOTH","","",null,null],[17,"S_IWOTH","","",null,null],[17,"S_IROTH","","",null,null],[17,"F_OK","","",null,null],[17,"R_OK","","",null,null],[17,"W_OK","","",null,null],[17,"X_OK","","",null,null],[17,"STDIN_FILENO","","",null,null],[17,"STDOUT_FILENO","","",null,null],[17,"STDERR_FILENO","","",null,null],[0,"bsd44","libc::consts::os","",null,null],[17,"AF_INET","libc::consts::os::bsd44","",null,null],[17,"AF_INET6","","",null,null],[17,"SOCK_STREAM","","",null,null],[17,"SOCK_DGRAM","","",null,null],[17,"SOCK_RAW","","",null,null],[17,"IPPROTO_TCP","","",null,null],[17,"IPPROTO_IP","","",null,null],[17,"IPPROTO_IPV6","","",null,null],[17,"IP_MULTICAST_TTL","","",null,null],[17,"IP_MULTICAST_LOOP","","",null,null],[17,"IP_ADD_MEMBERSHIP","","",null,null],[17,"IP_DROP_MEMBERSHIP","","",null,null],[17,"IPV6_ADD_MEMBERSHIP","","",null,null],[17,"IPV6_DROP_MEMBERSHIP","","",null,null],[17,"IP_TTL","","",null,null],[17,"IP_HDRINCL","","",null,null],[17,"TCP_NODELAY","","",null,null],[17,"SOL_SOCKET","","",null,null],[17,"SO_DEBUG","","",null,null],[17,"SO_ACCEPTCONN","","",null,null],[17,"SO_REUSEADDR","","",null,null],[17,"SO_KEEPALIVE","","",null,null],[17,"SO_DONTROUTE","","",null,null],[17,"SO_BROADCAST","","",null,null],[17,"SO_USELOOPBACK","","",null,null],[17,"SO_LINGER","","",null,null],[17,"SO_OOBINLINE","","",null,null],[17,"SO_SNDBUF","","",null,null],[17,"SO_RCVBUF","","",null,null],[17,"SO_SNDLOWAT","","",null,null],[17,"SO_RCVLOWAT","","",null,null],[17,"SO_SNDTIMEO","","",null,null],[17,"SO_RCVTIMEO","","",null,null],[17,"SO_ERROR","","",null,null],[17,"SO_TYPE","","",null,null],[17,"IFF_LOOPBACK","","",null,null],[17,"SHUT_RD","","",null,null],[17,"SHUT_WR","","",null,null],[17,"SHUT_RDWR","","",null,null],[0,"extra","libc::consts::os","",null,null],[17,"TRUE","libc::consts::os::extra","",null,null],[17,"FALSE","","",null,null],[17,"O_TEXT","","",null,null],[17,"O_BINARY","","",null,null],[17,"O_NOINHERIT","","",null,null],[17,"ERROR_SUCCESS","","",null,null],[17,"ERROR_INVALID_FUNCTION","","",null,null],[17,"ERROR_FILE_NOT_FOUND","","",null,null],[17,"ERROR_ACCESS_DENIED","","",null,null],[17,"ERROR_INVALID_HANDLE","","",null,null],[17,"ERROR_BROKEN_PIPE","","",null,null],[17,"ERROR_DISK_FULL","","",null,null],[17,"ERROR_CALL_NOT_IMPLEMENTED","","",null,null],[17,"ERROR_INSUFFICIENT_BUFFER","","",null,null],[17,"ERROR_INVALID_NAME","","",null,null],[17,"ERROR_ALREADY_EXISTS","","",null,null],[17,"ERROR_PIPE_BUSY","","",null,null],[17,"ERROR_NO_DATA","","",null,null],[17,"ERROR_INVALID_ADDRESS","","",null,null],[17,"ERROR_PIPE_CONNECTED","","",null,null],[17,"ERROR_NOTHING_TO_TERMINATE","","",null,null],[17,"ERROR_OPERATION_ABORTED","","",null,null],[17,"ERROR_IO_PENDING","","",null,null],[17,"ERROR_FILE_INVALID","","",null,null],[17,"ERROR_NOT_FOUND","","",null,null],[17,"INVALID_HANDLE_VALUE","","",null,null],[17,"DELETE","","",null,null],[17,"READ_CONTROL","","",null,null],[17,"SYNCHRONIZE","","",null,null],[17,"WRITE_DAC","","",null,null],[17,"WRITE_OWNER","","",null,null],[17,"PROCESS_CREATE_PROCESS","","",null,null],[17,"PROCESS_CREATE_THREAD","","",null,null],[17,"PROCESS_DUP_HANDLE","","",null,null],[17,"PROCESS_QUERY_INFORMATION","","",null,null],[17,"PROCESS_QUERY_LIMITED_INFORMATION","","",null,null],[17,"PROCESS_SET_INFORMATION","","",null,null],[17,"PROCESS_SET_QUOTA","","",null,null],[17,"PROCESS_SUSPEND_RESUME","","",null,null],[17,"PROCESS_TERMINATE","","",null,null],[17,"PROCESS_VM_OPERATION","","",null,null],[17,"PROCESS_VM_READ","","",null,null],[17,"PROCESS_VM_WRITE","","",null,null],[17,"STARTF_FORCEONFEEDBACK","","",null,null],[17,"STARTF_FORCEOFFFEEDBACK","","",null,null],[17,"STARTF_PREVENTPINNING","","",null,null],[17,"STARTF_RUNFULLSCREEN","","",null,null],[17,"STARTF_TITLEISAPPID","","",null,null],[17,"STARTF_TITLEISLINKNAME","","",null,null],[17,"STARTF_USECOUNTCHARS","","",null,null],[17,"STARTF_USEFILLATTRIBUTE","","",null,null],[17,"STARTF_USEHOTKEY","","",null,null],[17,"STARTF_USEPOSITION","","",null,null],[17,"STARTF_USESHOWWINDOW","","",null,null],[17,"STARTF_USESIZE","","",null,null],[17,"STARTF_USESTDHANDLES","","",null,null],[17,"WAIT_ABANDONED","","",null,null],[17,"WAIT_OBJECT_0","","",null,null],[17,"WAIT_TIMEOUT","","",null,null],[17,"WAIT_FAILED","","",null,null],[17,"DUPLICATE_CLOSE_SOURCE","","",null,null],[17,"DUPLICATE_SAME_ACCESS","","",null,null],[17,"INFINITE","","",null,null],[17,"STILL_ACTIVE","","",null,null],[17,"MEM_COMMIT","","",null,null],[17,"MEM_RESERVE","","",null,null],[17,"MEM_DECOMMIT","","",null,null],[17,"MEM_RELEASE","","",null,null],[17,"MEM_RESET","","",null,null],[17,"MEM_RESET_UNDO","","",null,null],[17,"MEM_LARGE_PAGES","","",null,null],[17,"MEM_PHYSICAL","","",null,null],[17,"MEM_TOP_DOWN","","",null,null],[17,"MEM_WRITE_WATCH","","",null,null],[17,"PAGE_EXECUTE","","",null,null],[17,"PAGE_EXECUTE_READ","","",null,null],[17,"PAGE_EXECUTE_READWRITE","","",null,null],[17,"PAGE_EXECUTE_WRITECOPY","","",null,null],[17,"PAGE_NOACCESS","","",null,null],[17,"PAGE_READONLY","","",null,null],[17,"PAGE_READWRITE","","",null,null],[17,"PAGE_WRITECOPY","","",null,null],[17,"PAGE_GUARD","","",null,null],[17,"PAGE_NOCACHE","","",null,null],[17,"PAGE_WRITECOMBINE","","",null,null],[17,"SEC_COMMIT","","",null,null],[17,"SEC_IMAGE","","",null,null],[17,"SEC_IMAGE_NO_EXECUTE","","",null,null],[17,"SEC_LARGE_PAGES","","",null,null],[17,"SEC_NOCACHE","","",null,null],[17,"SEC_RESERVE","","",null,null],[17,"SEC_WRITECOMBINE","","",null,null],[17,"FILE_MAP_ALL_ACCESS","","",null,null],[17,"FILE_MAP_READ","","",null,null],[17,"FILE_MAP_WRITE","","",null,null],[17,"FILE_MAP_COPY","","",null,null],[17,"FILE_MAP_EXECUTE","","",null,null],[17,"PROCESSOR_ARCHITECTURE_INTEL","","",null,null],[17,"PROCESSOR_ARCHITECTURE_ARM","","",null,null],[17,"PROCESSOR_ARCHITECTURE_IA64","","",null,null],[17,"PROCESSOR_ARCHITECTURE_AMD64","","",null,null],[17,"PROCESSOR_ARCHITECTURE_UNKNOWN","","",null,null],[17,"MOVEFILE_COPY_ALLOWED","","",null,null],[17,"MOVEFILE_CREATE_HARDLINK","","",null,null],[17,"MOVEFILE_DELAY_UNTIL_REBOOT","","",null,null],[17,"MOVEFILE_FAIL_IF_NOT_TRACKABLE","","",null,null],[17,"MOVEFILE_REPLACE_EXISTING","","",null,null],[17,"MOVEFILE_WRITE_THROUGH","","",null,null],[17,"SYMBOLIC_LINK_FLAG_DIRECTORY","","",null,null],[17,"FILE_SHARE_DELETE","","",null,null],[17,"FILE_SHARE_READ","","",null,null],[17,"FILE_SHARE_WRITE","","",null,null],[17,"CREATE_ALWAYS","","",null,null],[17,"CREATE_NEW","","",null,null],[17,"OPEN_ALWAYS","","",null,null],[17,"OPEN_EXISTING","","",null,null],[17,"TRUNCATE_EXISTING","","",null,null],[17,"FILE_APPEND_DATA","","",null,null],[17,"FILE_READ_DATA","","",null,null],[17,"FILE_WRITE_DATA","","",null,null],[17,"FILE_ATTRIBUTE_ARCHIVE","","",null,null],[17,"FILE_ATTRIBUTE_COMPRESSED","","",null,null],[17,"FILE_ATTRIBUTE_DEVICE","","",null,null],[17,"FILE_ATTRIBUTE_DIRECTORY","","",null,null],[17,"FILE_ATTRIBUTE_ENCRYPTED","","",null,null],[17,"FILE_ATTRIBUTE_HIDDEN","","",null,null],[17,"FILE_ATTRIBUTE_INTEGRITY_STREAM","","",null,null],[17,"FILE_ATTRIBUTE_NORMAL","","",null,null],[17,"FILE_ATTRIBUTE_NOT_CONTENT_INDEXED","","",null,null],[17,"FILE_ATTRIBUTE_NO_SCRUB_DATA","","",null,null],[17,"FILE_ATTRIBUTE_OFFLINE","","",null,null],[17,"FILE_ATTRIBUTE_READONLY","","",null,null],[17,"FILE_ATTRIBUTE_REPARSE_POINT","","",null,null],[17,"FILE_ATTRIBUTE_SPARSE_FILE","","",null,null],[17,"FILE_ATTRIBUTE_SYSTEM","","",null,null],[17,"FILE_ATTRIBUTE_TEMPORARY","","",null,null],[17,"FILE_ATTRIBUTE_VIRTUAL","","",null,null],[17,"FILE_FLAG_BACKUP_SEMANTICS","","",null,null],[17,"FILE_FLAG_DELETE_ON_CLOSE","","",null,null],[17,"FILE_FLAG_NO_BUFFERING","","",null,null],[17,"FILE_FLAG_OPEN_NO_RECALL","","",null,null],[17,"FILE_FLAG_OPEN_REPARSE_POINT","","",null,null],[17,"FILE_FLAG_OVERLAPPED","","",null,null],[17,"FILE_FLAG_POSIX_SEMANTICS","","",null,null],[17,"FILE_FLAG_RANDOM_ACCESS","","",null,null],[17,"FILE_FLAG_SESSION_AWARE","","",null,null],[17,"FILE_FLAG_SEQUENTIAL_SCAN","","",null,null],[17,"FILE_FLAG_WRITE_THROUGH","","",null,null],[17,"FILE_FLAG_FIRST_PIPE_INSTANCE","","",null,null],[17,"FILE_NAME_NORMALIZED","","",null,null],[17,"FILE_NAME_OPENED","","",null,null],[17,"VOLUME_NAME_DOS","","",null,null],[17,"VOLUME_NAME_GUID","","",null,null],[17,"VOLUME_NAME_NONE","","",null,null],[17,"VOLUME_NAME_NT","","",null,null],[17,"GENERIC_READ","","",null,null],[17,"GENERIC_WRITE","","",null,null],[17,"GENERIC_EXECUTE","","",null,null],[17,"GENERIC_ALL","","",null,null],[17,"FILE_WRITE_ATTRIBUTES","","",null,null],[17,"FILE_READ_ATTRIBUTES","","",null,null],[17,"STANDARD_RIGHTS_READ","","",null,null],[17,"STANDARD_RIGHTS_WRITE","","",null,null],[17,"FILE_WRITE_EA","","",null,null],[17,"FILE_READ_EA","","",null,null],[17,"FILE_GENERIC_READ","","",null,null],[17,"FILE_GENERIC_WRITE","","",null,null],[17,"FILE_BEGIN","","",null,null],[17,"FILE_CURRENT","","",null,null],[17,"FILE_END","","",null,null],[17,"MAX_PROTOCOL_CHAIN","","",null,null],[17,"WSAPROTOCOL_LEN","","",null,null],[17,"INVALID_SOCKET","","",null,null],[17,"DETACHED_PROCESS","","",null,null],[17,"CREATE_NEW_PROCESS_GROUP","","",null,null],[17,"CREATE_UNICODE_ENVIRONMENT","","",null,null],[17,"PIPE_ACCESS_DUPLEX","","",null,null],[17,"PIPE_ACCESS_INBOUND","","",null,null],[17,"PIPE_ACCESS_OUTBOUND","","",null,null],[17,"PIPE_TYPE_BYTE","","",null,null],[17,"PIPE_TYPE_MESSAGE","","",null,null],[17,"PIPE_READMODE_BYTE","","",null,null],[17,"PIPE_READMODE_MESSAGE","","",null,null],[17,"PIPE_WAIT","","",null,null],[17,"PIPE_NOWAIT","","",null,null],[17,"PIPE_ACCEPT_REMOTE_CLIENTS","","",null,null],[17,"PIPE_REJECT_REMOTE_CLIENTS","","",null,null],[17,"PIPE_UNLIMITED_INSTANCES","","",null,null],[17,"IPPROTO_RAW","","",null,null],[17,"FIONBIO","","",null,null],[0,"funcs","libc","",null,null],[0,"c95","libc::funcs","",null,null],[0,"ctype","libc::funcs::c95","",null,null],[5,"isalnum","libc::funcs::c95::ctype","",null,null],[5,"isalpha","","",null,null],[5,"iscntrl","","",null,null],[5,"isdigit","","",null,null],[5,"isgraph","","",null,null],[5,"islower","","",null,null],[5,"isprint","","",null,null],[5,"ispunct","","",null,null],[5,"isspace","","",null,null],[5,"isupper","","",null,null],[5,"isxdigit","","",null,null],[5,"tolower","","",null,null],[5,"toupper","","",null,null],[0,"stdio","libc::funcs::c95","",null,null],[5,"fopen","libc::funcs::c95::stdio","",null,null],[5,"freopen","","",null,null],[5,"fflush","","",null,null],[5,"fclose","","",null,null],[5,"remove","","",null,null],[5,"rename","","",null,null],[5,"tmpfile","","",null,null],[5,"setvbuf","","",null,null],[5,"setbuf","","",null,null],[5,"fgetc","","",null,null],[5,"fgets","","",null,null],[5,"fputc","","",null,null],[5,"fputs","","",null,null],[5,"puts","","",null,null],[5,"ungetc","","",null,null],[5,"fread","","",null,null],[5,"fwrite","","",null,null],[5,"fseek","","",null,null],[5,"ftell","","",null,null],[5,"rewind","","",null,null],[5,"fgetpos","","",null,null],[5,"fsetpos","","",null,null],[5,"feof","","",null,null],[5,"ferror","","",null,null],[5,"perror","","",null,null],[0,"stdlib","libc::funcs::c95","",null,null],[5,"abs","libc::funcs::c95::stdlib","",null,null],[5,"labs","","",null,null],[5,"atof","","",null,null],[5,"atoi","","",null,null],[5,"strtod","","",null,null],[5,"strtol","","",null,null],[5,"strtoul","","",null,null],[5,"calloc","","",null,null],[5,"malloc","","",null,null],[5,"realloc","","",null,null],[5,"free","","",null,null],[5,"exit","","Exits the running program in a possibly dangerous manner.",null,null],[5,"_exit","","",null,null],[5,"atexit","","",null,null],[5,"system","","",null,null],[5,"getenv","","",null,null],[5,"rand","","",null,null],[5,"srand","","",null,null],[0,"string","libc::funcs::c95","",null,null],[5,"strcpy","libc::funcs::c95::string","",null,null],[5,"strncpy","","",null,null],[5,"strcat","","",null,null],[5,"strncat","","",null,null],[5,"strcmp","","",null,null],[5,"strncmp","","",null,null],[5,"strcoll","","",null,null],[5,"strchr","","",null,null],[5,"strrchr","","",null,null],[5,"strspn","","",null,null],[5,"strcspn","","",null,null],[5,"strpbrk","","",null,null],[5,"strstr","","",null,null],[5,"strlen","","",null,null],[5,"strerror","","",null,null],[5,"strtok","","",null,null],[5,"strxfrm","","",null,null],[5,"wcslen","","",null,null],[5,"memcmp","","",null,null],[5,"memchr","","",null,null],[0,"posix88","libc::funcs","",null,null],[0,"stat_","libc::funcs::posix88","",null,null],[5,"chmod","libc::funcs::posix88::stat_","",null,null],[5,"wchmod","","",null,null],[5,"mkdir","","",null,null],[5,"wrmdir","","",null,null],[5,"fstat","","",null,null],[5,"stat","","",null,null],[5,"wstat","","",null,null],[5,"wutime","","",null,null],[0,"stdio","libc::funcs::posix88","",null,null],[5,"popen","libc::funcs::posix88::stdio","",null,null],[5,"pclose","","",null,null],[5,"fdopen","","",null,null],[5,"fileno","","",null,null],[0,"fcntl","libc::funcs::posix88","",null,null],[5,"open","libc::funcs::posix88::fcntl","",null,null],[5,"wopen","","",null,null],[5,"creat","","",null,null],[0,"unistd","libc::funcs::posix88","",null,null],[5,"access","libc::funcs::posix88::unistd","",null,null],[5,"chdir","","",null,null],[5,"close","","",null,null],[5,"dup","","",null,null],[5,"dup2","","",null,null],[5,"execv","","",null,null],[5,"execve","","",null,null],[5,"execvp","","",null,null],[5,"execvpe","","",null,null],[5,"getcwd","","",null,null],[5,"getpid","","",null,null],[5,"isatty","","",null,null],[5,"lseek","","",null,null],[5,"pipe","","",null,null],[5,"read","","",null,null],[5,"rmdir","","",null,null],[5,"unlink","","",null,null],[5,"write","","",null,null],[0,"bsd43","libc::funcs","",null,null],[5,"socket","libc::funcs::bsd43","",null,null],[5,"connect","","",null,null],[5,"bind","","",null,null],[5,"listen","","",null,null],[5,"accept","","",null,null],[5,"getpeername","","",null,null],[5,"getsockname","","",null,null],[5,"setsockopt","","",null,null],[5,"closesocket","","",null,null],[5,"recv","","",null,null],[5,"send","","",null,null],[5,"recvfrom","","",null,null],[5,"sendto","","",null,null],[5,"shutdown","","",null,null],[0,"extra","libc::funcs","",null,null],[0,"kernel32","libc::funcs::extra","",null,null],[5,"GetEnvironmentVariableW","libc::funcs::extra::kernel32","",null,null],[5,"SetEnvironmentVariableW","","",null,null],[5,"GetEnvironmentStringsW","","",null,null],[5,"FreeEnvironmentStringsW","","",null,null],[5,"GetModuleFileNameW","","",null,null],[5,"CreateDirectoryW","","",null,null],[5,"CopyFileW","","",null,null],[5,"DeleteFileW","","",null,null],[5,"RemoveDirectoryW","","",null,null],[5,"GetCurrentDirectoryW","","",null,null],[5,"SetCurrentDirectoryW","","",null,null],[5,"GetLastError","","",null,null],[5,"FindFirstFileW","","",null,null],[5,"FindNextFileW","","",null,null],[5,"FindClose","","",null,null],[5,"DuplicateHandle","","",null,null],[5,"CloseHandle","","",null,null],[5,"OpenProcess","","",null,null],[5,"GetCurrentProcess","","",null,null],[5,"CreateProcessW","","",null,null],[5,"WaitForSingleObject","","",null,null],[5,"TerminateProcess","","",null,null],[5,"GetExitCodeProcess","","",null,null],[5,"GetSystemInfo","","",null,null],[5,"VirtualAlloc","","",null,null],[5,"VirtualFree","","",null,null],[5,"VirtualLock","","",null,null],[5,"VirtualUnlock","","",null,null],[5,"VirtualProtect","","",null,null],[5,"VirtualQuery","","",null,null],[5,"CreateFileMappingW","","",null,null],[5,"MapViewOfFile","","",null,null],[5,"UnmapViewOfFile","","",null,null],[5,"MoveFileExW","","",null,null],[5,"CreateHardLinkW","","",null,null],[5,"FlushFileBuffers","","",null,null],[5,"CreateFileW","","",null,null],[5,"ReadFile","","",null,null],[5,"WriteFile","","",null,null],[5,"SetFilePointerEx","","",null,null],[5,"SetEndOfFile","","",null,null],[5,"GetSystemTimeAsFileTime","","",null,null],[5,"QueryPerformanceFrequency","","",null,null],[5,"QueryPerformanceCounter","","",null,null],[5,"GetCurrentProcessId","","",null,null],[5,"CreateNamedPipeW","","",null,null],[5,"ConnectNamedPipe","","",null,null],[5,"WaitNamedPipeW","","",null,null],[5,"SetNamedPipeHandleState","","",null,null],[5,"CreateEventW","","",null,null],[5,"GetOverlappedResult","","",null,null],[5,"DisconnectNamedPipe","","",null,null],[0,"msvcrt","libc::funcs::extra","",null,null],[5,"commit","libc::funcs::extra::msvcrt","",null,null],[5,"get_osfhandle","","",null,null],[5,"open_osfhandle","","",null,null],[0,"winsock","libc::funcs::extra","",null,null],[5,"ioctlsocket","libc::funcs::extra::winsock","",null,null]],"paths":[[4,"c_void"],[3,"stat"],[3,"utimbuf"],[3,"timeval"],[3,"timespec"],[3,"sockaddr"],[3,"sockaddr_storage"],[3,"sockaddr_in"],[3,"in_addr"],[3,"sockaddr_in6"],[3,"in6_addr"],[3,"ip_mreq"],[3,"ip6_mreq"],[3,"addrinfo"],[3,"sockaddr_un"],[3,"SECURITY_ATTRIBUTES"],[3,"STARTUPINFO"],[3,"PROCESS_INFORMATION"],[3,"SYSTEM_INFO"],[3,"MEMORY_BASIC_INFORMATION"],[3,"OVERLAPPED"],[3,"FILETIME"],[3,"GUID"],[3,"WSAPROTOCOLCHAIN"],[3,"WSAPROTOCOL_INFO"],[3,"WIN32_FIND_DATAW"]]};
searchIndex['build'] = {"items":[[0,"","build","",null,null],[5,"link","","",null,{"inputs":[{"name":"str"},{"name":"bool"}],"output":null}]],"paths":[]};
initSearch(searchIndex);
