function collect_same_elements(collection_a, collection_b) {
        var C = new Array();
        k = 0;
        for (var i = 0; i < collection_a.length; i++) {
        	for (var j = 0; j < collection_b.length;j++) {
        		if (collection_a[i] === collection_b[j]) {
                         C[k] = collection_a[i];
                         k++;         
        		};
        	};
        };
       return C;
}

module.exports = collect_same_elements;
