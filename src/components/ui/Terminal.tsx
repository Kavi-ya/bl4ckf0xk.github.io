"use client";

import { useState, useRef, useEffect } from "react";
import { GlassCard } from "./GlassCard";

interface Command {
    input: string;
    output: React.ReactNode;
}

export function Terminal() {
    const [history, setHistory] = useState<Command[]>([
        { input: "help", output: "Available commands: help, whoami, projects, contact, clear" }
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = "";

        switch (trimmedCmd) {
            case "help":
                output = "Available commands: help, whoami, projects, contact, clear";
                break;
            case "whoami":
                output = "Kavindu Sahan (bl4ckf0xk) - Exploit Developer & Security Specialist";
                break;
            case "projects":
                output = "Check out /portfolio for full list. Top projects: Advanced Exploit Framework, ICS/OT Scanner.";
                break;
            case "contact":
                output = "LinkedIn: linkedin.com/in/bl4ckf0xk | GitHub: github.com/bl4ckf0xk";
                break;
            case "clear":
                setHistory([]);
                return;
            default:
                output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
        }

        setHistory([...history, { input: cmd, output }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input) return;
        handleCommand(input);
        setInput("");
    };

    return (
        <GlassCard className="w-full max-w-2xl mx-auto mt-12 p-0 overflow-hidden font-mono text-sm">
            <div className="bg-black/50 p-2 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-gray-500 text-xs">someone@bl4ckf0xk.io:~</div>
            </div>

            <div
                ref={containerRef}
                className="p-4 h-64 overflow-y-auto scroll-smooth"
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((entry, i) => (
                    <div key={i} className="mb-2">
                        <div className="flex gap-2 text-gray-400">
                            <span className="text-hacker-blue">➜</span>
                            <span className="text-hacker-red">~</span>
                            <span>{entry.input}</span>
                        </div>
                        <div className="text-gray-300 ml-4 mb-2">{entry.output}</div>
                    </div>
                ))}

                <form onSubmit={handleSubmit} className="flex gap-2 text-gray-400">
                    <span className="text-hacker-blue">➜</span>
                    <span className="text-hacker-red">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent focus:outline-none text-white"
                        autoFocus
                    />
                </form>

            </div>
        </GlassCard>
    );
}
