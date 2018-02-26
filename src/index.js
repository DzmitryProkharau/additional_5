module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0||str.length === 0) return false;
	str = str.split('');
	

	(function checking() {
			
			var x = 0;
			var start = null;
			var end = null;
			var count = 0;

			while (x < bracketsConfig.length) {

				if (str[0] === bracketsConfig[x][0]) {
					start = str[0];
					if (str.indexOf(bracketsConfig[x][1]) !== -1) {				
						end = x;
						break;					
					}
				}
					
				x++;
			}

			if (str.length!==0&&start!==null&&end!==null) {
			for (var j = 1; j < str.length; j++) {
					if (str[j] === bracketsConfig[end][1]&&count === 0) {
						str.splice(j, 1);
						str.shift();
						start = null;
						end = null;
						break;
					}
					if (str[j] === start) {
						count = count + 1;
					}else if (str[j] === bracketsConfig[end][1]) {
						count = count -1;
					}
				}	
			checking();
		   }			
		})();

		if (str.length !== 0) {
			return false;
		}else{
			return true;
		}
}
