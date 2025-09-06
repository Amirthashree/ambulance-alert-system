document.addEventListener('DOMContentLoaded', () => {
  const signalLight = document.getElementById('signal-light');
  const alertText = document.getElementById('alert-text');
  const hospitalText = document.getElementById('hospital-text');

  // Simulate ambulance approaching at intervals
  const simulationSteps = [
    { distance: 100, signal: 'red', alert: 'No ambulance nearby', hospital: 'No active notifications' },
    { distance: 50, signal: 'yellow', alert: '🚑 Ambulance approaching – 50m away!', hospital: 'Hospital notified – ETA: 3 mins' },
    { distance: 0, signal: 'green', alert: '🚑 Ambulance is here!', hospital: 'Hospital ready to receive patient' }
  ];

  let stepIndex = 0;

  function updateSimulation() {
    const step = simulationSteps[stepIndex];
    alertText.textContent = step.alert;
    hospitalText.textContent = step.hospital;

    // Update traffic light color classes
    signalLight.className = step.signal;

    stepIndex = (stepIndex + 1) % simulationSteps.length;
  }

  // Initial update
  updateSimulation();

  // Update every 5 seconds
  setInterval(updateSimulation, 5000);
});
