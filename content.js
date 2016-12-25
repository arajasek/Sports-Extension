//Code inspired by PC2Respect

	// Code borrowed from Cloud to Butt under their quite creative
	// open souce license

walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bbaseball\b/gi, "[REDACTED]");
	v = v.replace(/\bhockey\b/gi, "[REDACTED]");
	v = v.replace(/\bfootball\b/gi, "[REDACTED]");
	v = v.replace(/\bsoccer\b/gi, "[REDACTED]");
	v = v.replace(/\bbasketball\b/gi, "[REDACTED]");
	v = v.replace(/\bstanley cup\b/gi, "[REDACTED]");
	v = v.replace(/\bsuperbowl\b/gi, "[REDACTED]");

	textNode.nodeValue = v;
}

