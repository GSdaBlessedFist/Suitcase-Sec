
const lockUI = `<div class="example-object">
  <div class="example1-slot-container">
    <div class="example1-roller-container">
      <div class="example1-roller-item-1" data-something="">&#9734;</div>
      <div class="example1-roller-item-2" data-something="">&#9734; &#9734;</div>
      <div class="example1-roller-item-3" data-something="">&#9734; &#9734; &#9734;</div>
      <div class="example1-roller-item-4" data-something="">&#9734; &#9734; &#9734; &#9734;</div>
      <div class="example1-roller-item-5" data-something="">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
    </div>
  </div>
  <div class="example2-slot-container">
    <div class="example2-roller-container">
      <div class="example2-roller-item-1" data-something="">&#9734;</div>
      <div class="example2-roller-item-3" data-something="">&#9734; &#9734; &#9734;</div>
      <div class="example2-roller-item-5" data-something="">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
    </div>
  </div>
  <div class="examples-captions">
    <code>
      .<strong>example1</strong>-roller-container{
      &nbsp;&nbsp;overflow:&nbsp;<span style="color:skyblue;">auto</span>;<br>
      }
    </code><br>
    <code>
      .<strong>example2</strong>-roller-container{
      &nbsp;&nbsp;overflow:&nbsp;<span style="color:skyblue;">hidden</span>;<br>
  	  }
    </code>
  </div>
</div>`

const usermodelHtml = `
  email: {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;type:String,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;unique:true,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;required:true<br>
  &nbsp;&nbsp;},<br>
  password: {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;type: String,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;required:false,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;select:false<br>
  &nbsp;&nbsp;},<br>
  hashword: {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;type: String<br>
  }
`

const graphicWorkHtml = `
  <div id="graphic-work-logo" >
    <img src="/images/suitcase-sec(logo).svg" alt="Suitcase Security logo" class="graphic-work-logo"/>           
  </div>
  <div id="graphic-work-suitcase" >
    <img src="/images/suitcase.svg" alt="suitcase with Suitcase-Sec logo" class="graphic-work-suitcase"/>           
  </div>
`

const aboutSiteInfo ={
	"concept":"Equally inspired by the 'ditto' sheets of yester-year and the suitcase lock, this app is intended to breakdown the authentication process using a novelty PIN interface.",
	"challenges":["tech stack","step checklist","the lock UI","the PIN mechanism","API routing","storage","graphic work","responsive"],
	"challengeDescriptions":{
		"step checklist":"The step checklist updates as the user enters valid/invalid information, logs in, or creates a new account.  To make this happen I passed the setState as prop into children components. Once updated from within, the state is returned to the parent, then disseminated to sibiling children components.  This technique was used update the features/challenges section we're on now.",
		"the PIN mechanism":"The PIN lock idea was gone with because it adds interactivity. In order to address a user not specifically selecting a PIN, '0000' is defaulted. To add to the password's <strong>complexity<\/strong>, the PIN itself isn't hashed. It is the data-attribute on the individual roller element that gets hashed using bcryptjs. <strong>Using this method, the password string is easily 16-20 characters...then hashed.<\/strong><\/br><div style=\"margin-top:.5rem;\">The divs have the following:<\/div><code class=\"pin-mechanism-code\"><strong>data-slotletter=\"A\" data-numberposition=\"Zer0\"</strong><\/code><\/div></br><div>The data-attribute was used like this:</br><code class=\"pin-mechanism-code\"><strong>setSlotA(`${entry.target.dataset.slotletter}${entry.target.dataset.numberposition}`)<\/strong></code></br>",
		"the lock UI":`<div>The default PIN is \'0000\' in case the user doesn\'t <em>activate</em> the lock component. When activated the user sees the roller elements to select a PIN.</div><br><\/div><div class=\"lock-ui-pic\">${lockUI}<\/div>`,
		"storage":`<div>Since no OAuth solution would be necessary for this project, a small MongoDB database was created. The <strong>users</strong> collection contains documents using a simple Mongoose object model:</div><br><code class="storage-code">${usermodelHtml}</code>`,
		"tech stack":"<h3 style=\"margin-top:1rem;\">Frontend:<\/h3><div>&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS3, Sass(bem), Next.js 13,<br>&nbsp;&nbsp;&nbsp;&nbsp;<em>dependencies<\/em>:[axios, bcryptjs, mongoose, sass]<\/div><br><h3>Database:<\/h3><div>&nbsp;&nbsp;&nbsp;&nbsp;MongoDB, <em>ORM: <\/em>Mongoose<\/div>",
		"graphic work":`<div>Created using Inkscape and exported as an <strong>.svg</strong> because I love their flexibility.<\/div><div class=\"graphic-work-box\">${graphicWorkHtml}</div>`,
		"responsive":"<div>There are breakpoints at: &nbsp;640px, 768px, 1024px, 1280px, 1536px. Although manually entered, these points were taken from TailwindCSS's defaults.<\/div>",
		"API routing":"<div>For a more streamline user experience, I opted to <em>not<\/em> use the common \'redirect to sign-in\' pattern but to have the sign-in form on the index page. API calls are made for new account creation and signin handling which eliminates the need for a traditional backend solution such as Node.js <\/div>"
	}
}


export default aboutSiteInfo;