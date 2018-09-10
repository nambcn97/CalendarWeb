<?php

namespace App\Http\Controllers;

use App\Events;

use Request;

use App\Http\Controllers\APIBaseController as APIBaseController;

use Validator;

class EventController extends APIBaseController
{
    public function index(){
    	$events = Events::all();
    	/*
			$events = Events:latest()->paginate(5);
    	*/
		return $this->sendResponse($events->toArray(), 'Events retrieved successfully.');
    }


    public function create(){
    }

    public function store(Request $request){
    	$input = Request::all();
    	$validator = Validator::make($input, [
            'name' => 'required',
            'description' => 'required',
            'date_of_event' => 'required',
            'location' => 'required',

        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());       

        }

        $events = Events::create($input);

        return $this->sendResponse($events->toArray(), 'Event created successfully.');

    }

    public function show($id){
    	$events = Events::find($id);

        if (is_null($events)) {

            return $this->sendError('Events not found.');
        }

        return $this->sendResponse($events->toArray(), 'Events retrieved successfully.');

    }

    public function edit($id){
    	$events = Events::find($id);
    }

    public function update(Request $request , $id){
    	$input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'description' => 'required',
            'date_of_event' => 'required',
            'location' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $events = Events::find($id);
        if (is_null($events)) {
            return $this->sendError('Events not found.');
        }

        $events->name = $input['name'];
        $events->description = $input['description'];
        $events->date_of_event = $input['date_of_event'];
        $events->location = $input['location'];
        $events->save();

        return $this->sendResponse($events->toArray(), 'Events updated successfully.');
    }

    public function destroy($id){
    	$events = Events::find($id);

        if (is_null($events)) {
            return $this->sendError('Events not found.');
        }
        $events->delete();
        return $this->sendResponse($id, 'Tag deleted successfully.');
    }
}
