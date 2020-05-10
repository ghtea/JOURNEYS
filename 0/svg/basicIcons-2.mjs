
import { html, Component, render, useState} from '../common/standalone.module.js';


function Show({degree}) {

return html`
<div class="divShow">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" 

class="iconShow"
transform="rotate(${degree})"
>

<g>
	<path d="M33.454,17.627c-0.756-0.801-2.152-0.801-2.908,0l-17,18c-0.758,0.803-0.722,2.069,0.081,2.827
		c0.803,0.758,2.069,0.722,2.827-0.081L32,21.913l15.546,16.46C47.939,38.79,48.469,39,49,39c0.493,0,0.986-0.181,1.373-0.546
		c0.803-0.758,0.839-2.024,0.081-2.827L33.454,17.627z"/>
	<path d="M32,0C23.453,0,15.417,3.329,9.374,9.373C3.329,15.417,0,23.453,0,32s3.33,16.583,9.374,22.626
		C15.417,60.671,23.453,64,32,64s16.583-3.329,22.626-9.373C60.671,48.583,64,40.547,64,32s-3.33-16.583-9.374-22.626
		C48.583,3.329,40.547,0,32,0z M51.797,51.798C46.509,57.087,39.479,60,32,60s-14.509-2.913-19.798-8.202C6.913,46.51,4,39.479,4,32
		s2.913-14.51,8.203-19.798C17.491,6.913,24.521,4,32,4s14.509,2.913,19.798,8.202C57.087,17.49,60,24.521,60,32
		S57.087,46.51,51.797,51.798z"/>
</g>
 </svg>

</div>
`  
}





/*
function Move() {

return html`
<div class="divMove">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.339 344.339" 

class="iconMove"
style="">

<g>
		<rect y="46.06" width="344.339" height="29.52"/>
		</g>
		<g>
			<rect y="156.506" width="344.339" height="29.52"/>
		</g>
		<g>
			<rect y="268.748" width="344.339" height="29.531"/>
	</g>
 </svg>

</div>
`  
}




function Edit() {

return html`
<div class="divEdit">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.855 217.855" 

class="iconEdit"
style="">

<g>
			<path d="M215.658,53.55L164.305,2.196C162.899,0.79,160.991,0,159.002,0c-1.989,0-3.897,0.79-5.303,2.196L3.809,152.086
	c-1.35,1.352-2.135,3.166-2.193,5.075l-1.611,52.966c-0.063,2.067,0.731,4.069,2.193,5.532c1.409,1.408,3.317,2.196,5.303,2.196
	c0.076,0,0.152-0.001,0.229-0.004l52.964-1.613c1.909-0.058,3.724-0.842,5.075-2.192l149.89-149.889
	C218.587,61.228,218.587,56.479,215.658,53.55z M57.264,201.336l-42.024,1.28l1.279-42.026l91.124-91.125l40.75,40.743
	L57.264,201.336z M159,99.602l-40.751-40.742l40.752-40.753l40.746,40.747L159,99.602z"/>
</g>
 </svg>

</div>
`  
}


function Save() {

return html`
<div class="divSave">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236.988 236.988" 

class="iconSave">
			<polygon points="198.098,24.326 87.543,134.881 38.891,86.229 0,125.121 87.543,212.662 236.988,63.217 "/>

 </svg>

</div>
`  
}


function Delete() {

return html`
<div class="divDelete">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 

class="iconDelete">

<polygon points="404.176,0 256,148.176 107.824,0 0,107.824 148.176,256 0,404.176 107.824,512 256,363.824 
	404.176,512 512,404.176 363.824,256 512,107.824 "/>
 </svg>

</div>
`  
}

*/


/*
function Save() {

return html`
<div class="divSave">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.369 78.369" 

class="iconSave"
style="">

<g>
			<path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
		c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
		C78.477,17.894,78.477,18.586,78.049,19.015z"/>
</g>
 </svg>

</div>
`  
}
*/



export {Show};