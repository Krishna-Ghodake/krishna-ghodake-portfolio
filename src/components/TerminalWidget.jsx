import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    { type: 'sys', text: 'Welcome to AlexOS Kernel v2.4.0 (Computer Science Lab Shell)' },
    { type: 'sys', text: 'Type "help" or click quick commands below.' }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleRunCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs = [...logs, { type: 'input', text: cleanCmd }];

    if (cleanCmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    const res = PORTFOLIO_DATA.terminalCommands[cleanCmd];
    if (res) {
      newLogs.push({ type: 'output', text: res });
    } else {
      newLogs.push({
        type: 'error',
        text: `zsh: command not found: ${cleanCmd}. Type "help" for valid commands.`
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRunCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl space-y-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-handwritten text-2xl font-bold text-amber-300">
              Interactive Terminal Simulator! 💻
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--text-main)]">
              CS <span className="pop-text-gradient">TERMINAL SHELL</span>
            </h2>
          </div>

          <button
            onClick={() => handleRunCommand('clear')}
            className="font-code text-xs text-[var(--text-sub)] hover:text-[var(--accent-pink)] underline cursor-pointer"
          >
            Clear Console Output
          </button>
        </div>

        {/* Console Box */}
        <div className="art-card border-2 border-[var(--accent-cyan)] overflow-hidden shadow-2xl font-code text-sm">

          {/* Console Header */}
          <div className="bg-[var(--bg-main)] px-5 py-3 border-b-2 border-[var(--border-color)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
              <span className="text-xs text-[var(--text-sub)] ml-2 font-mono">visitor@alexrivers-cs:~</span>
            </div>
            <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5 font-mono">
              ● ONLINE
            </span>
          </div>

          {/* Console Logs */}
          <div className="p-6 h-80 overflow-y-auto space-y-3 bg-black/60 text-slate-100">
            {logs.map((log, index) => (
              <div key={index} className="leading-relaxed">
                {log.type === 'input' && (
                  <div className="flex items-center gap-2 text-[var(--accent-cyan)]">
                    <span className="text-[var(--accent-pink)]">visitor@alexrivers-cs:~$</span>
                    <span className="text-white font-bold">{log.text}</span>
                  </div>
                )}
                {log.type === 'sys' && (
                  <div className="text-slate-400 italic"># {log.text}</div>
                )}
                {log.type === 'output' && (
                  <div className="text-emerald-400 pl-4 border-l-2 border-emerald-500 py-0.5">
                    {log.text}
                  </div>
                )}
                {log.type === 'error' && (
                  <div className="text-rose-400 pl-4 border-l-2 border-rose-500 py-0.5">
                    {log.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-3 bg-[var(--bg-main)] border-t-2 border-[var(--border-color)] flex items-center gap-3">
            <span className="text-[var(--accent-pink)] font-bold pl-2 font-mono">visitor@alexrivers-cs:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'bio', 'projects', 'skills', 'hire'..."
              className="flex-1 bg-transparent border-none outline-none font-code text-sm text-[var(--text-main)] placeholder-[var(--text-sub)]"
            />
            <button type="submit" className="p-2.5 rounded-xl bg-[var(--accent-pink)]/20 text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-white transition-colors cursor-pointer">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="font-handwritten text-xl font-bold text-[var(--accent-pink)]">Try these commands:</span>
          {['help', 'bio', 'skills', 'projects', 'contact', 'hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleRunCommand(cmd)}
              className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-color)] font-code text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all cursor-pointer shadow-sm"
            >
              $ {cmd}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
