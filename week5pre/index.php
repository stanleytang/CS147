<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
    <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
	</head>

	<body>
	  <div data-role="fieldcontain" class="ui-hide-label" id="login-form-container">
	    <form action="login.php" method="post" id="login-form">
      	<label for="username">Username:</label>
      	<input type="text" name="username" id="username" value="" placeholder="Username"/>
      	<label for="password">Password:</label>
      	<input type="password" name="password" id="password" value="" placeholder="Password"/>
      	<input type="submit" id="submit" data-theme="b" value="Login" />
      </form>
    </div>
	</body>
</html>