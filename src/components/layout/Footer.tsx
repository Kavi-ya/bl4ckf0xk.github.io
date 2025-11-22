import { Github, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-400 font-mono text-sm">
                        © {new Date().getFullYear()} Kavindu Sahan. All systems operational.
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/bl4ckf0xk" target="_blank" className="text-gray-400 hover:text-hacker-blue transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/kavindu-sahan" target="_blank" className="text-gray-400 hover:text-hacker-blue transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
