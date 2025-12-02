import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiPlus, FiTrash2 } from "react-icons/fi";
import { MdRefresh } from "react-icons/md";

const FCFS = () => {
  const [processes, setProcesses] = useState([
    { id: 1, arrivalTime: 0, burstTime: 8, completed: false, startTime: null, endTime: null },
    { id: 2, arrivalTime: 1, burstTime: 4, completed: false, startTime: null, endTime: null },
    { id: 3, arrivalTime: 2, burstTime: 2, completed: false, startTime: null, endTime: null },
  ]);

  const [executing, setExecuting] = useState(false);
  const [results, setResults] = useState(null);
  const [nextId, setNextId] = useState(4);

  const calculateFCFS = () => {
    setExecuting(true);
    const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
    const results = [];
    let currentTime = 0;

    sorted.forEach((process) => {
      const startTime = Math.max(currentTime, process.arrivalTime);
      const endTime = startTime + process.burstTime;
      const waitTime = startTime - process.arrivalTime;
      const turnAroundTime = endTime - process.arrivalTime;

      results.push({
        ...process,
        startTime,
        endTime,
        waitTime,
        turnAroundTime,
      });

      currentTime = endTime;
    });

    const avgWaitTime =
      results.reduce((sum, p) => sum + p.waitTime, 0) / results.length;
    const avgTurnAroundTime =
      results.reduce((sum, p) => sum + p.turnAroundTime, 0) / results.length;

    setResults({
      processes: results,
      avgWaitTime: avgWaitTime.toFixed(2),
      avgTurnAroundTime: avgTurnAroundTime.toFixed(2),
      totalTime: Math.max(...results.map((p) => p.endTime)),
    });

    setTimeout(() => setExecuting(false), 1500);
  };

  const reset = () => {
    setProcesses([
      { id: 1, arrivalTime: 0, burstTime: 8, completed: false, startTime: null, endTime: null },
      { id: 2, arrivalTime: 1, burstTime: 4, completed: false, startTime: null, endTime: null },
      { id: 3, arrivalTime: 2, burstTime: 2, completed: false, startTime: null, endTime: null },
    ]);
    setResults(null);
  };

  const handleInputChange = (id, field, value) => {
    setProcesses(
      processes.map((p) =>
        p.id === id ? { ...p, [field]: parseInt(value) || 0 } : p
      )
    );
  };

  const addProcess = () => {
    const newProcess = {
      id: nextId,
      arrivalTime: 0,
      burstTime: 1,
      completed: false,
      startTime: null,
      endTime: null,
    };
    setProcesses([...processes, newProcess]);
    setNextId(nextId + 1);
  };

  const removeProcess = (id) => {
    if (processes.length > 1) {
      setProcesses(processes.filter((p) => p.id !== id));
      setResults(null);
    }
  };

  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-20 overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9333ea]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06b6d4]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border-2 border-[#9333ea]/40 bg-gradient-to-r from-[#9333ea]/10 to-[#06b6d4]/10 px-5 py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9333ea]" />
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9333ea]">CPU Scheduling Algorithm</p>
          </div>

          <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#06b6d4]">
            FCFS Scheduler
          </h1>

          <p className="text-lg text-[#c4b5fd] max-w-3xl mx-auto leading-relaxed">
            First Come First Served (FCFS) CPU scheduling algorithm simulator. Add processes, configure their arrival and burst times, and visualize real-time scheduling execution.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Input Section */}
          <motion.div
            className="rounded-3xl border-2 border-[#9333ea]/60 bg-gradient-to-br from-[#1e1b4b]/80 via-[#312e81]/60 to-[#1e1b4b]/80 backdrop-blur-2xl p-10 space-y-8 shadow-2xl shadow-[#9333ea]/20 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#9333ea]/20 rounded-full blur-3xl" />
            <div className="relative space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-12 bg-gradient-to-b from-[#9333ea] via-[#a855f7] to-[#06b6d4] rounded-full shadow-lg shadow-[#9333ea]/50" />
                  <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] to-[#06b6d4]">
                    Process Manager
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={addProcess}
                  className="rounded-xl border-2 border-[#06b6d4] bg-gradient-to-r from-[#06b6d4] to-[#0891b2] px-4 py-2.5 text-white font-bold shadow-lg shadow-[#06b6d4]/50 hover:shadow-xl hover:shadow-[#06b6d4]/70 transition-all"
                >
                  <FiPlus className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-sm text-[#c4b5fd] ml-6">Add and configure processes</p>
            </div>

            <div className="relative space-y-4 max-h-[500px] overflow-y-auto pr-3 custom-scrollbar">
              {processes.map((process, index) => (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border-2 border-[#9333ea]/50 bg-gradient-to-br from-[#9333ea]/20 via-[#a855f7]/10 to-transparent hover:border-[#9333ea]/90 backdrop-blur-sm p-6 space-y-4 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9333ea]/40 hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9333ea] to-[#06b6d4] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#9333ea]/50">
                        {process.id}
                      </div>
                      <div>
                        <h3 className="font-black text-white text-lg">Process {process.id}</h3>
                        <p className="text-xs text-[#c4b5fd]">CPU Task</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs px-4 py-1.5 rounded-full bg-[#9333ea]/30 border-2 border-[#9333ea]/70 text-white font-bold tracking-wider">
                        P{process.id}
                      </div>
                      {processes.length > 1 && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeProcess(process.id)}
                          className="rounded-lg border-2 border-red-500/50 bg-red-500/20 p-2 text-red-400 hover:bg-red-500/30 hover:border-red-500 transition-all"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2.5">
                      <label className="block text-xs font-black text-[#06b6d4] uppercase tracking-widest">
                        Arrival Time
                      </label>
                      <input
                        type="number"
                        value={process.arrivalTime}
                        onChange={(e) =>
                          handleInputChange(
                            process.id,
                            "arrivalTime",
                            e.target.value
                          )
                        }
                        className="w-full rounded-xl border-2 border-[#9333ea]/50 bg-[#1e1b4b]/80 px-4 py-3 text-white font-bold text-lg focus:border-[#06b6d4] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/60 focus:bg-[#312e81] transition-all"
                        min="0"
                      />
                    </div>

                    <div className="space-y-2.5">
                      <label className="block text-xs font-black text-[#a855f7] uppercase tracking-widest">
                        Burst Time
                      </label>
                      <input
                        type="number"
                        value={process.burstTime}
                        onChange={(e) =>
                          handleInputChange(process.id, "burstTime", e.target.value)
                        }
                        className="w-full rounded-xl border-2 border-[#9333ea]/50 bg-[#1e1b4b]/80 px-4 py-3 text-white font-bold text-lg focus:border-[#a855f7] focus:outline-none focus:ring-2 focus:ring-[#a855f7]/60 focus:bg-[#312e81] transition-all"
                        min="1"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="relative flex gap-4 pt-8 border-t-2 border-[#9333ea]/30">
              <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.92 }}
                onClick={calculateFCFS}
                disabled={executing}
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#9333ea] bg-gradient-to-br from-[#9333ea] via-[#a855f7] to-[#06b6d4] px-8 py-5 text-lg font-black text-white shadow-2xl shadow-[#9333ea]/70 transition-all hover:shadow-[0_0_30px_#9333ea] disabled:opacity-50 disabled:scale-100 hover:-translate-y-1 uppercase tracking-wider"
              >
                <FiPlay className="w-7 h-7" />
                {executing ? "Executing..." : "Run FCFS"}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.92 }}
                onClick={reset}
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#9333ea]/60 bg-[#1e1b4b]/80 hover:bg-[#9333ea]/30 px-8 py-5 text-lg font-black text-[#9333ea] transition-all hover:border-[#9333ea] hover:shadow-2xl hover:shadow-[#9333ea]/40 hover:-translate-y-1 uppercase tracking-wider"
              >
                <MdRefresh className="w-7 h-7" />
                Reset All
              </motion.button>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            className="rounded-3xl border-2 border-[#06b6d4]/70 bg-gradient-to-br from-[#0c4a6e]/80 via-[#075985]/60 to-[#0c4a6e]/80 backdrop-blur-2xl p-10 space-y-8 shadow-2xl shadow-[#06b6d4]/20 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#06b6d4]/10 rounded-full blur-3xl" />
            <div className="relative space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-12 bg-gradient-to-b from-[#06b6d4] via-[#0891b2] to-[#9333ea] rounded-full shadow-lg shadow-[#06b6d4]/50" />
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#9333ea]">
                  Results
                </h2>
              </div>
              <p className="text-sm text-[#c4b5fd] ml-6">Scheduling metrics and analysis</p>
            </div>

            {results ? (
              <div className="space-y-6">
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl border-2 border-[#9333ea]/50 bg-gradient-to-br from-[#9333ea]/25 to-[#a855f7]/15 p-5 text-center hover:border-[#9333ea] hover:shadow-xl hover:shadow-[#9333ea]/40 transition-all cursor-pointer group"
                  >
                    <p className="text-xs font-bold text-[#06b6d4] mb-2 uppercase tracking-widest">Wait</p>
                    <p className="text-4xl font-black text-[#9333ea] group-hover:scale-110 transition-transform">
                      {results.avgWaitTime}
                    </p>
                    <p className="text-xs text-[#c4b5fd] mt-1">milliseconds</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-xl border-2 border-[#06b6d4]/50 bg-gradient-to-br from-[#06b6d4]/25 to-[#0891b2]/15 p-5 text-center hover:border-[#06b6d4] hover:shadow-xl hover:shadow-[#06b6d4]/40 transition-all cursor-pointer group"
                  >
                    <p className="text-xs font-bold text-[#9333ea] mb-2 uppercase tracking-widest">TAT</p>
                    <p className="text-4xl font-black text-[#06b6d4] group-hover:scale-110 transition-transform">
                      {results.avgTurnAroundTime}
                    </p>
                    <p className="text-xs text-[#c4b5fd] mt-1">milliseconds</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-xl border-2 border-[#a855f7]/30 bg-gradient-to-br from-[#a855f7]/10 to-[#9333ea]/5 p-5 text-center hover:border-[#a855f7]/60 hover:shadow-xl hover:shadow-[#a855f7]/20 transition-all cursor-pointer group"
                  >
                    <p className="text-xs font-bold text-white mb-2 uppercase tracking-widest">Total</p>
                    <p className="text-4xl font-black text-white group-hover:scale-110 transition-transform">
                      {results.totalTime}
                    </p>
                    <p className="text-xs text-[#c4b5fd] mt-1">milliseconds</p>
                  </motion.div>
                </div>

                {/* Process Details Table */}
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                  {results.processes.map((process, index) => (
                    <motion.div
                      key={process.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-lg border-2 border-[#9333ea]/30 bg-gradient-to-r from-[#9333ea]/10 to-[#06b6d4]/5 p-4 hover:border-[#9333ea]/70 hover:bg-[#9333ea]/15 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-2xl text-[#9333ea]">P{process.id}</span>
                          <div className="h-1 w-12 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] rounded-full" />
                        </div>
                        <span className="text-sm text-white bg-[#9333ea]/30 px-4 py-1 rounded-lg font-bold border border-[#9333ea]/50">
                          {process.startTime} → {process.endTime}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between items-center bg-[#9333ea]/10 rounded-lg px-3 py-2">
                          <span className="text-[#c4b5fd] font-semibold">Wait:</span>
                          <span className="font-black text-[#9333ea]">{process.waitTime}</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#06b6d4]/10 rounded-lg px-3 py-2">
                          <span className="text-[#c4b5fd] font-semibold">TAT:</span>
                          <span className="font-black text-[#06b6d4]">{process.turnAroundTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center py-16">
                <div className="space-y-4">
                  <div className="text-6xl">⏱️</div>
                  <p className="text-white font-bold text-lg">No Results Yet</p>
                  <p className="text-[#c4b5fd]">Configure processes and click Execute</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Gantt Chart */}
        {results && (
          <motion.div
            className="rounded-3xl border-2 border-[#9333ea]/70 bg-gradient-to-br from-[#1e1b4b]/80 via-[#312e81]/60 to-[#1e1b4b]/80 backdrop-blur-2xl p-10 space-y-8 shadow-2xl shadow-[#9333ea]/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#9333ea]/10 rounded-full blur-3xl" />
            <div className="relative space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-12 bg-gradient-to-b from-[#9333ea] via-[#a855f7] to-[#06b6d4] rounded-full shadow-lg shadow-[#9333ea]/50" />
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] to-[#06b6d4]">
                  Gantt Chart
                </h2>
              </div>
              <p className="text-sm text-[#c4b5fd] ml-6">Visual timeline of process execution</p>
            </div>

            <div className="relative space-y-8">
              {/* Process Timeline */}
              <div className="overflow-x-auto rounded-2xl border-2 border-[#9333ea]/40 bg-[#1e1b4b]/80 p-8">
                <div className="flex h-28 gap-3 min-w-min">
                  {results.processes.map((process, index) => (
                    <motion.div
                      key={process.id}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 }}
                      style={{
                        width: `${process.burstTime * 70}px`,
                      }}
                      className="relative rounded-2xl border-3 border-[#9333ea] bg-gradient-to-br from-[#9333ea] via-[#a855f7] to-[#06b6d4] flex flex-col items-center justify-center font-black text-white hover:shadow-2xl hover:shadow-[#9333ea]/70 transition-all group transform hover:scale-110 hover:-translate-y-3"
                    >
                      <span className="text-3xl drop-shadow-lg">P{process.id}</span>
                      <span className="text-xs font-bold mt-2 opacity-90">{process.burstTime}ms</span>
                      <div className="absolute -bottom-10 text-xs font-bold text-[#9333ea] whitespace-nowrap">
                        [{process.startTime}, {process.endTime})
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Timeline Ruler */}
              <div className="overflow-x-auto">
                <div className="flex gap-0 min-w-min px-8">
                  {Array.from(
                    { length: results.totalTime + 1 },
                    (_, i) => i
                  ).map((time) => (
                    <div
                      key={time}
                      className="relative"
                      style={{ width: "70px" }}
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-4 bg-[#9333ea] shadow-lg shadow-[#9333ea]/50" />
                      <span className="text-sm font-black text-[#9333ea] absolute -top-8">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-1.5 bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#06b6d4] rounded-full shadow-lg shadow-[#9333ea]/40" />
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border-2 border-[#9333ea]/50 bg-gradient-to-br from-[#9333ea]/20 to-[#a855f7]/10 p-5 text-center hover:border-[#9333ea] hover:shadow-xl hover:shadow-[#9333ea]/40 transition-all group cursor-pointer"
                >
                  <p className="text-xs font-black text-[#06b6d4] mb-2 uppercase tracking-widest">Processes</p>
                  <p className="text-4xl font-black text-[#9333ea] group-hover:scale-110 transition-transform">
                    {results.processes.length}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-xl border-2 border-[#9333ea]/50 bg-gradient-to-br from-[#9333ea]/20 to-[#a855f7]/10 p-5 text-center hover:border-[#9333ea] hover:shadow-xl hover:shadow-[#9333ea]/40 transition-all group cursor-pointer"
                >
                  <p className="text-xs font-black text-[#06b6d4] mb-2 uppercase tracking-widest">Duration</p>
                  <p className="text-4xl font-black text-[#9333ea] group-hover:scale-110 transition-transform">
                    {results.totalTime}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-xl border-2 border-[#06b6d4]/50 bg-gradient-to-br from-[#06b6d4]/20 to-[#0891b2]/10 p-5 text-center hover:border-[#06b6d4] hover:shadow-xl hover:shadow-[#06b6d4]/40 transition-all group cursor-pointer"
                >
                  <p className="text-xs font-black text-[#9333ea] mb-2 uppercase tracking-widest">Avg Wait</p>
                  <p className="text-4xl font-black text-[#06b6d4] group-hover:scale-110 transition-transform">
                    {results.avgWaitTime}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-xl border-2 border-[#06b6d4]/50 bg-gradient-to-br from-[#06b6d4]/20 to-[#0891b2]/10 p-5 text-center hover:border-[#06b6d4] hover:shadow-xl hover:shadow-[#06b6d4]/40 transition-all group cursor-pointer"
                >
                  <p className="text-xs font-black text-[#9333ea] mb-2 uppercase tracking-widest">Avg TAT</p>
                  <p className="text-4xl font-black text-[#06b6d4] group-hover:scale-110 transition-transform">
                    {results.avgTurnAroundTime}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FCFS;
