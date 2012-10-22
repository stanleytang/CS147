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
  	<?php
      $username = strtolower($_POST["username"]);
      $password = $_POST["password"];
      
      $backButton = "<a data-rel='back' data-role='button' data-theme='b' href='#'>Back</a>";
  
      if ($username != "test") {
        echo "<p>Username <b>" . $username . "</b> doesn't exist.</p>";
        echo $backButton;
        return;
      }
  
      if ($password != "test") {
        echo "<p>Wrong password.</p>";
        echo $backButton;
        return;
      }

    	echo "<p>Success!</p>";
    ?>
  </body>
</html>