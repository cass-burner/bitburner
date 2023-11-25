export async function main(ns) {

 var target = "n00dles"

 if (ns.fileExists("BruteSSH.exe", "home")) {
  ns.brutessh(target);
 }

 if (ns.fileExists("FTPcrack.exe", "home")) {
  ns.ftpcrack(target);
 }

 ns.nuke(target);

 var thread_count, filename = "early-hack-template.js";
 for (var target_server of ((hostname)))
  ns.scp(filename, (hostname));  // Copy the script.
 thread_count = ns.getServerMaxRam((hostname)) - ns.getServerUsedRam((hostname));  // Get available RAM.
 thread_count = Math.floor(thread_count / ns.getScriptRam(filename, (hostname)));
 if (thread_count > 0 && ns.hasRootAccess(target_server)) {  // If it's possible to run the script...
  ns.exec(filename, target_server, thread_count);  // ...then run it.
 }
}

while (true) {
 if (ns.getServerSecurityLevel(hostname) > ns.getServerMinSecurityLevel(hostname)) {
  await ns.weaken(hostname);
 } else if (ns.getServerMoneyAvailable(hostname) < ns.getServerMaxMoney(hostname)) {
  await ns.grow(hostname);
 } else {
  await ns.hack(hostname);
 }
}
