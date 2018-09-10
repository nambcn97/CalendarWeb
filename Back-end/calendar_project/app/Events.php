<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    const CREATED_AT = "Date_Created";
    const UPDATED_AT = "Last_Modified";//

    public function event_type(){
    	return $this->belongsTo('App\EventsType');
    }


    public function time(){
    	$this->hasMany('App\Time');
    }


}
