export async function main(ns) {
  const args = ns.flags([['help', false]]);
  const hostname = args._[0];
  if (args.help || !hostname) {
    ns.tprint("This script will generate money by hacking a target server.");
    ns.tprint(`USAGE: run ${ns.getScriptName()} SERVER_NAME`);
    ns.tprint("Example:");
    ns.tprint(`> run ${ns.getScriptName()} n00dles`);
    return;
  }

  if (ns.fileExists("BruteSSH.exe", "home")) {
    ns.brutessh(hostname);
  }

  if (ns.fileExists("FTPcrack.exe", "home")) {
    ns.ftpcrack(hostname);
  }

  ns.nuke(hostname)

  ns.installBackdoor

  ns.scp("early-hack-template.script", hostname)
  ns.exec("early-hack-template.script", hostname)

  while (true) {
    if (ns.getServerSecurityLevel(hostname) > ns.getServerMinSecurityLevel(hostname)) {
      await ns.weaken(hostname);
    } else if (ns.getServerMoneyAvailable(hostname) < ns.getServerMaxMoney(hostname)) {
      await ns.grow(hostname);
    } else {
      await ns.hack(hostname);
    }
  }
}
