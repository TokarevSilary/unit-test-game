export default function healthStatus(argument) {
	if (argument.health > 50) return "healthy";
	else if(argument.health < 15) return "critical";
	return "wounded" 
}
