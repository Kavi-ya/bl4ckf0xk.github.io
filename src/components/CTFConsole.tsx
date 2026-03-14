"use client";

import { useEffect } from "react";

export function CTFConsole() {
    useEffect(() => {
        // Only run this once on mount
        const consoleAscii = `
  _     _ _  _       _    __  ___      _    
 | |__ | | || | ___ | | __\\ \\/ / | __ | |   
 | '_ \\| | || ||/ __|| |/ / \\  /| |/ / | |   
 | |_) | |__   _|\\__ \\|   <  /  \\|   <  |_|   
 |_.__/|_|  |_| |___/|_|\\_\\/_/\\_\\_|\\_\\ (_)   

System Introgression Detected...
Loading CTF Flag Fragment [3/3]...
Fragment decrypted: 3sc4p3}

Good luck finding the rest.
`;
        
        // Output to console with hacker styling
        console.log(
            "%c" + consoleAscii, 
            "color: #00f0ff; font-family: monospace; font-size: 14px; text-shadow: 0 0 5px #00f0ff;"
        );
    }, []);

    return null;
}
