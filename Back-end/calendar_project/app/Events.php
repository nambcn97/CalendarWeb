<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    const CREATED_AT = "Date_Created";
    const UPDATED_AT = "Last_Modified";//

    public function event_type(){
    	return $this->belongsTo('App\EventsType','events_event_type','event_id','event_type_id');
    }


    public function time(){
    	$this->hasMany('App\Time');
    }

    protected $fillable = [

        'name', 'description','date_of_event','location','is_Active',

    ];
}
