/** @param {NS} ns */
export async function main(ns) {

var target_list = ns.scan("home")

ns.tprint(target_list)

ns.scp("early-hack-template.script",target_list[0])
ns.scp("early-hack-template.script",target_list[1])
ns.scp("early-hack-template.script",target_list[2])
ns.scp("early-hack-template.script",target_list[3])
ns.scp("early-hack-template.script",target_list[4])
ns.scp("early-hack-template.script",target_list[5])

for (var i = 0; i < target_list.length; i++) {
ns.nuke(target_list[i])

ns.exec("early-hack-template.script",target_list[0])
ns.exec("early-hack-template.script",target_list[1])
ns.exec("early-hack-template.script",target_list[2])
ns.exec("early-hack-template.script",target_list[3])
ns.exec("early-hack-template.script",target_list[4])
ns.exec("early-hack-template.script",target_list[5])

var loopCounter = 0
var lengthOfMyList = target_list.length
while (loopCounter < lengthOfMyList){
 ns.scp("early-hack-template.script",target_list[loopCounter])
 loopCounter = loopCounter + 1
}
}
}
