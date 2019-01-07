// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  const macthedDrivers = drivers.filter(driver => driver.hometown === hometown)
  logDriverNames(macthedDrivers)
}

function driversByRevenue(drivers) {
  const newDrivers = [...drivers]
  const sortedByRevenue = newDrivers.sort(function(a,b){
    return a.revenue - b.revenue
  })
  return sortedByRevenue
}

function driversByName(drivers) {
  const newDrivers = [...drivers]
  const sortedByName = newDrivers.sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
  return sortedByName
}

function totalRevenue(drivers) {
  let total = 0

   drivers.forEach(function(driver){
    total += driver.revenue
  })
  return total
}
function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
