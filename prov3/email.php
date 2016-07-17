<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Post Email</title>
</head>
<style type="text/css">
    * {
        color: blue;
        font-family: monospace;
        font-size: 30px;
    }
</style>
<body>
    
    <?php
        $myEmailAddress = "ardiansallauka@gmail.com";
        $subject = "Mesazh nga faqja!";

        $name = $_POST['emri'];
        $email = $_POST['emaili'];
        $message = $_POST['mesazhi'];
        $header = "from: $name <$email>";

        mail($myEmailAddress, $subject, $message, $header);

    ?>
    <p>Faleminderit per mesazhin.</p>
</body>
</html>