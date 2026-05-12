<?php
$page = $_GET['page'] ?? '';

if ($page === 'content') {
    include __DIR__ . '/content.php';
    return;
}
?>
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Планувальник виробництва у Foxhole</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <?php include __DIR__ . '/content.php'; ?>
  <script src="script.js"></script>
</body>
</html>
