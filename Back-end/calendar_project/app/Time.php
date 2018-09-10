<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    return $this->belongsTo('App\Events');//

    protected $fillable = [
    	'name_of_event', 'date_of_event',
    ];
}
