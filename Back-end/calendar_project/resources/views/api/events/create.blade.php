<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Testing CRUD</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
    <form method="POST" action="{{ action('EventController@store') }}">
      @csrf
  <div class="form-group">
    
    <label for="name">Name</label>
    <input type="text" class="form-control" placeholder="name" name="name">
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <input type="text" class="form-control" placeholder="Description of event" name="description">
  </div>
  <div class="form-group">
    <label for="date_of_event">Date of Event</label>
    <input type="date" class="form-control" placeholder="date" name="date_of_event">
  </div>
  <div class="form-group">
    <label for="location">Location</label>
    <input type="text" class="form-control" placeholder="location" name="location">
  <label for="is_Active">Still ongoing?</label>
  <select name="is_Active" class="form-control">
    <option value="1">YES</option>
    <option value="0">NO</option>
  </select> 
  </div>

  <input type="submit" class="btn btn-info" value="Submit Button">
</form>
</div>
</div>
</div>




<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>