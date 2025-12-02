// lib/utils/fcfs.js
export const calculateFcfsSchedule = (processes) => {
  // Expect processes as array of { id, name, arrivalTime, burstTime, order }
  if (!Array.isArray(processes) || processes.length === 0) return [];

  // Clone to avoid mutating original
  const procs = processes.map((p) => ({
    ...p,
    arrivalTime: Number(p.arrivalTime ?? 0),
    burstTime: Number(p.burstTime ?? 0),
  }));

  // Sort by arrival time then by order (stable)
  procs.sort((a, b) => {
    if (a.arrivalTime !== b.arrivalTime) return a.arrivalTime - b.arrivalTime;
    return a.order - b.order;
  });

  let currentTime = 0;
  const schedule = [];
  const gantt = [];

  for (let i = 0; i < procs.length; i++) {
    const p = procs[i];

    // If CPU idle, jump to arrival
    if (currentTime < p.arrivalTime) {
      // Record idle slot in Gantt (optional)
      gantt.push({
        pid: null,
        start: currentTime,
        end: p.arrivalTime,
        label: "idle",
      });
      currentTime = p.arrivalTime;
    }

    const start = currentTime;
    const end = start + p.burstTime;
    const waitingTime = start - p.arrivalTime;
    const turnaroundTime = end - p.arrivalTime;

    // push gantt block
    gantt.push({
      pid: p.id,
      start,
      end,
      label: p.name,
    });

    schedule.push({
      ...p,
      arrivalTime: p.arrivalTime,
      burstTime: p.burstTime,
      start,
      completionTime: end,
      waitingTime,
      turnaroundTime,
    });

    currentTime = end;
  }

  // Return schedule (in CPU execution order) and gantt
  return { schedule, gantt };
};

export const getAverageTimes = (schedule) => {
  // schedule: array of scheduled processes (with waitingTime, turnaroundTime)
  if (!Array.isArray(schedule) || schedule.length === 0) {
    return { averageWaiting: 0, averageTurnaround: 0, totalWaiting: 0, totalTurnaround: 0 };
  }

  const totals = schedule.reduce(
    (acc, p) => {
      acc.waiting += Number(p.waitingTime ?? 0);
      acc.turnaround += Number(p.turnaroundTime ?? p.turnaround ?? 0);
      return acc;
    },
    { waiting: 0, turnaround: 0 }
  );

  return {
    averageWaiting: totals.waiting / schedule.length,
    averageTurnaround: totals.turnaround / schedule.length,
    totalWaiting: totals.waiting,
    totalTurnaround: totals.turnaround,
  };
};
