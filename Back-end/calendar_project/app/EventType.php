<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventType extends Model
{
    public function Events()
    {
    	return $this->hasMany('App\Events');
    }

    protected $fillable = [

        'name', 'description','color',

    ];
}
