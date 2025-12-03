import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiReset } from "react-icons/fi";

const FCFS = () => {
  const [processes, setProcesses] = useState([
    {
      id: 1,
      arrivalTime: 0,
      burstTime: 8,
      completed: false,
      startTime: null,
      endTime: null,
    },
    {
      id: 2,
      arrivalTime: 1,
      burstTime: 4,
      completed: false,
      startTime: null,
      endTime: null,
    },
    {
      id: 3,
      arrivalTime: 2,
      burstTime: 2,
      completed: false,
      startTime: null,
      endTime: null,
    },
  ]);

  const [executing, setExecuting] = useState(false);
  const [results, setResults] = useState(null);

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
      {
        id: 1,
        arrivalTime: 0,
        burstTime: 8,
        completed: false,
        startTime: null,
        endTime: null,
      },
      {
        id: 2,
        arrivalTime: 1,
        burstTime: 4,
        completed: false,
        startTime: null,
        endTime: null,
      },
      {
        id: 3,
        arrivalTime: 2,
        burstTime: 2,
        completed: false,
        startTime: null,
        endTime: null,
      },
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

  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#9333ea]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#06b6d4]/15 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl space-y-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#9333ea]/40 bg-[#9333ea]/10 px-5 py-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-75 animate-pulse" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9333ea]" />
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9333ea]">
              CPU Algorithm
            </p>
          </div>

          <h1 className="text-6xl sm:text-7xl font-black text-[#faf5ff] tracking-tight">
            FCFS{" "}
            <span className="bg-gradient-to-r from-[#9333ea] via-[#06b6d4] to-[#a855f7] text-transparent bg-clip-text">
              Scheduler
            </span>
          </h1>

          <p className="text-lg text-[#c4b5fd] max-w-3xl mx-auto leading-relaxed">
            First Come First Served scheduling algorithm simulator. Configure
            processes and visualize how they're scheduled in real-time.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Input Section */}
          <motion.div
            className="rounded-3xl border-2 border-[#9333ea]/70 bg-gradient-to-br from-[#6a3a3a]/40 via-[#3c1414]/60 to-[#0f0b1e] backdrop-blur-2xl p-10 space-y-8 shadow-2xl shadow-[#9333ea]/20 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-12 bg-gradient-to-b from-[#9333ea] via-[#06b6d4] to-[#a855f7] rounded-full shadow-lg shadow-[#9333ea]/50" />
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] to-[#06b6d4]">
                  Process Config
                </h2>
              </div>
            </div>

            <div className="relative space-y-3 max-h-96 overflow-y-auto pr-3">
              {processes.map((process, index) => (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  className="group rounded-2xl border-2 border-[#9333ea]/50 bg-gradient-to-br from-[#9333ea]/20 via-[#06b6d4]/10 to-transparent hover:border-[#9333ea]/90 backdrop-blur-sm p-6 space-y-4 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9333ea]/40 hover:scale-102"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
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
                        className="w-full rounded-xl border-2 border-[#9333ea]/50 bg-[#0f0b1e]/80 px-4 py-3 text-[#faf5ff] font-bold"
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-[#06b6d4] uppercase tracking-widest">
                        Burst Time
                      </label>
                      <input
                        type="number"
                        value={process.burstTime}
                        onChange={(e) =>
                          handleInputChange(
                            process.id,
                            "burstTime",
                            e.target.value
                          )
                        }
                        className="w-full rounded-xl border-2 border-[#9333ea]/50 bg-[#0f0b1e]/80 px-4 py-3 text-[#faf5ff] font-bold"
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
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#9333ea] bg-gradient-to-br from-[#9333ea] via-[#06b6d4] to-[#a855f7] px-8 py-5 text-lg font-black"
              >
                <FiPlay className="w-7 h-7" />
                {executing ? "Executing..." : "Run FCFS"}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.92 }}
                onClick={reset}
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#9333ea]/60 bg-[#0f0b1e]/80 text-[#9333ea] px-8 py-5 text-lg font-black"
              >
                <FiReset className="w-7 h-7" />
                Reset All
              </motion.button>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            className="rounded-3xl border-2 border-[#06b6d4]/70 bg-gradient-to-br from-[#6a3a3a]/40 via-[#3c1414]/60 to-[#0f0b1e] backdrop-blur-2xl p-10 space-y-8 shadow-2xl shadow-[#06b6d4]/20 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative space-y-3">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#9333ea]">
                Results
              </h2>
            </div>

            {results ? (
              <div className="space-y-6">
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl p-5 text-center border-2 border-[#9333ea]/50">
                    <p className="text-xs font-bold text-[#06b6d4]">Wait</p>
                    <p className="text-4xl font-black text-[#9333ea]">
                      {results.avgWaitTime}
                    </p>
                  </div>

                  <div className="rounded-xl p-5 text-center border-2 border-[#06b6d4]/50">
                    <p className="text-xs font-bold text-[#9333ea]">TAT</p>
                    <p className="text-4xl font-black text-[#06b6d4]">
                      {results.avgTurnAroundTime}
                    </p>
                  </div>

                  <div className="rounded-xl p-5 text-center border-2 border-[#faf5ff]/30">
                    <p className="text-xs font-bold text-[#faf5ff]">Total</p>
                    <p className="text-4xl font-black text-[#faf5ff]">
                      {results.totalTime}
                    </p>
                  </div>
                </div>

                {/* Process Details Table */}
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                  {results.processes.map((process, index) => (
                    <div
                      key={process.id}
                      className="rounded-lg border-2 border-[#9333ea]/30 p-4"
                    >
                      <div className="flex justify-between">
                        <span className="text-[#9333ea] font-black text-xl">
                          P{process.id}
                        </span>
                        <span className="text-[#faf5ff]">
                          [{process.startTime} → {process.endTime}]
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ⭐ NEW CT / WT / TAT TABLE ⭐ */}
                <div className="mt-8 rounded-2xl overflow-hidden border-2 border-[#9333ea]/50 bg-[#0f0b1e]/60 backdrop-blur-xl">
                  <table className="w-full text-left text-[#faf5ff]">
                    <thead className="bg-gradient-to-r from-[#9333ea]/40 to-[#06b6d4]/40">
                      <tr>
                        <th className="px-6 py-4 font-black tracking-widest text-sm">
                          Process
                        </th>
                        <th className="px-6 py-4 font-black tracking-widest text-sm">
                          AT
                        </th>
                        <th className="px-6 py-4 font-black tracking-widest text-sm">
                          BT
                        </th>
                        <th className="px-6 py-4 font-black tracking-widest text-sm">
                          CT
                        </th>
                        <th className="px-6 py-4 font-black tracking-widest text-sm">
                          WT
                        </th>
                        <th className="px-6 py-4 font-black tracking-widest text-sm">
                          TAT
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {results.processes.map((p, i) => (
                        <tr
                          key={p.id}
                          className={`border-b border-[#9333ea]/30 hover:bg-[#9333ea]/10 ${
                            i % 2 === 0 ? "bg-[#ffffff]/[0.02]" : ""
                          }`}
                        >
                          <td className="px-6 py-4 font-black text-[#9333ea]">
                            P{p.id}
                          </td>
                          <td className="px-6 py-4">{p.arrivalTime}</td>
                          <td className="px-6 py-4">{p.burstTime}</td>
                          <td className="px-6 py-4 text-[#06b6d4] font-bold">
                            {p.endTime}
                          </td>
                          <td className="px-6 py-4 text-[#faf5ff] font-bold">
                            {p.waitTime}
                          </td>
                          <td className="px-6 py-4 text-[#a855f7] font-bold">
                            {p.turnAroundTime}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-[#faf5ff]">
                No Results Yet — run FCFS
              </div>
            )}
          </motion.div>
        </div>

        {/* Gantt Chart */}
        {results && (
          <motion.div
            className="rounded-3xl border-2 border-[#9333ea]/70 bg-[#0f0b1e]/80 p-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-black text-[#9333ea]">Gantt Chart</h2>
            <div className="mt-8 flex gap-3">
              {results.processes.map((p) => (
                <div
                  key={p.id}
                  style={{ width: `${p.burstTime * 70}px` }}
                  className="rounded-xl bg-gradient-to-br from-[#9333ea] via-[#06b6d4] to-[#a855f7] p-4 text-[#0f0b1e] font-black text-xl"
                >
                  P{p.id}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FCFS;
