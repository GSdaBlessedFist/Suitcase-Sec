
const comments ={
	"userFeedback":{
		"EmailUpdate":"Great! You've entered a valid email",
		"InvalidEmail":"Please enter a valid email address.",
		"SigninFailEmail":"Email not found",
		"SigninFail":"Authentication failed",
		"SigninSuccess":"You've successfully signed in.",
		"NewAccountSuccess":"Congrats,your new account was created",
		"NewAccountFail":"Sorry, but that email is already registered or you\'re missing a PIN. ",
		"Signout":"It\'s been a pleasure.  You\'ve logged out."
	},
	"processComments":{
		"NoEmail0000": "<div class=\"info-title\">Welcome.<\/div> <div class=\"info-text\">In this project we'll be walking through the authentication process for a suitcase-inspired login component<\/div></br><div class=\"info-text\">Please enter your email to start off.<\/div>",
		"InvalidEmail":"<div class=\"info-title\">Not a valid email address.<\/div></div><div class=\"info-text\">The email input is not matching the regex statement: </br><div class=\"info-code\"><strong><em>pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/<\/em></strong></div>",
		"EmailUpdate": "<div class=\"info-title\">A valid email...good.</div><div class=\"info-text\">When the email input is clicked out of, the entry is checked for validity by matching it against a regex statement: </br><div class=\"info-code\"><strong><em>pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/<\/em></strong></div><div>If you have an account already...<span class=\"info-text-box\">Sign in<\/span><\/div><div>If you\'re a noob to the site...<span class=\"info-text-box\">New Account<\/span><\/div>",
		"SigninFailEmail": "<div class=\"info-title\">Email not found.<\/div> <div class=\"info-text\">A POST request is sent to check if the email is in the database. In this case, it wasn\'t. Try hitting the <span class=\"info-text-box\">New Account<\/span> button.<\/div>",
		"SigninFail": "<div class=\"info-title\">Signin failed<\/div>",
		"SigninSuccess": "<div class=\"info-title\">Signin successfully<\/div><div class=\"info-text\">We\'d go ahead and update the page to display authenticated content.</div>",
		"NewAccountSuccess":"<div class=\"info-title\">Successfully created new account<\/div><div class=\"info-text\">So, first the email was validated then when you clicked on the activation button, an <span style=\"font-weight:bold\">onBlur <\/span>handler function reveals the lock.<\/br><span style=\"font-size:1.15rem;text-align:center;\"><em>If you didn't activate the lock, the PIN defaults to \"0000\". </br>Not too safe.<\/span></em><\/div><div class=\"info-text\">The individual sliders are loaded with data-attributes that give us the password string.<\/div><div class=\"info-text\">That, then gets hashed and saved in the database.  Also, you are logged in automatically.<\/div><div><strong>Jackpot!<\/strong> ...insert Dashboard, etc.<\/div>",
		"NewAccountFail":"<div class=\"info-title\">A duplicate email or a missing PIN<\/div><div class=\"info-text\"> A search is performed for the email in the database.  <strong>If</strong> found there\'s a duplication error .<\div>",
		"Signout":"<div class=\"info-title\">Logged out</div><div class=\"info-text\">We\'d go ahead and update the page to display non-authenticated content.</div>"
	}
}

export default comments;