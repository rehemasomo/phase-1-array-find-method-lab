// code your solution here
function superbowlWin(record) {
    const winningRecord = record.find(game => game.result === "W"); // Using find() to search for a win
    
    // If a winning record is found, return the year of the win
    // Otherwise, return undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  
  
  