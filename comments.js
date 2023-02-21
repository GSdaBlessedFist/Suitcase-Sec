
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
		"EmailUpdate": "<div class=\"info-title\">A valid email...good.</div><div class=\"info-text\">When the email input is clicked out of, the entry is checked for validity by matching it against a regex statement: </br><div class=\"info-code\"><strong><em>pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/<\/em></strong></div>",
		"SigninFailEmail": "<div class=\"info-title\">Email not found.<\/div> <div class=\"info-text\">Since the default PIN is 0000, a POST request is sent to check if the email is in the database. In this case, it wasn\'t<\/div><div class=\"info-text\">Step 2. A <em>user<\/em> object is created to check against the database.<\/div><ol class=\"info-text list\"><li>hash the user entered combination<\/li><li>compare it to the database entry<\/li><\/ol><div class=\"col-2\"><div class=\"right-group\"><div class=\"info-text \"><strong>Match:<\/strong> Yes<\/div><\/br><div class=\"info-text \">Congrats! <\/br>You\'ve signed in<\/div><\/div><div class=\"left-group\"><div class=\"info-text left\"><strong>Match:<\/strong> No<\/div><\/br><div class=\"info-text \">The email entered will stay but the lock positions with zero out.<\/div><\/div><\/div><div class=\"signinAttemptExtra\">ie...combination hashing: \"3541\"-><\/br>\"$2b$10$nOUIs5kJ7naTuTFkBy...\"<\/div>",
		"SigninFail": "<div class=\"info-title\">Signin failed<\/div>",
		"SigninSuccess": "<div class=\"info-title\">Signin successfully<\/div>",
		"NewAccountSuccess":"<div class=\"info-title\">Successfully created new account<\/div></br><div class=\"info-text\">So, first the email was validated then when you clicked on the activation button, an <span style=\"font-weight:bold\">onBlur <\/span>handler function reveals the lock.<\/br><span style=\"font-size:1.15rem;text-align:center;\"><em>the default PIN if you don\'t activate the lock is \"0000\". </br>Not too safe.<\/span></em><\/div></br><div class=\"info-text\">The individual sliders are loaded with data-attributes that give us the password string.<\/div><\/br><div class=\"info-text\">That, then gets hashed and saved in the database.  Also, you are logged in automatically.<\/div>",
		"NewAccountFail":"<div class=\"info-title\">A duplicate email or a missing PIN<\/div><div class=\"info-text\"> A search is performed for the email in the database.  <strong>If</strong> found there\'s a duplication error .<\div>",
		"Signout":"<div class=\"info-title\">Logged out</div><div class=\"info-text\">We\'d go ahead and update the page to display non-authenticated content.</div>"
	}
}

export default comments;