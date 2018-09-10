<?php

namespace App\Http\Controllers;

use Request;

use App\EventType;

use App\Http\Controllers\APIBaseController as APIBaseController;

use Validator;
class EventTypeController extends APIBaseController
{
	public function index(){
    	$event_types = EventType::all();
    	/*
			$events = Events:latest()->paginate(5);
    	*/
		return $this->sendResponse($event_types->toArray(), 'Event type retrieved successfully.');
    }


    public function create(){
    }

    public function store(Request $request){
    	$input = Request::all();
    	$validator = Validator::make($input, [
            'name' => 'required',
            'description' => 'required',
            'color' => 'required',
            'is_Active' => 'boolean',

        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());       

        }

        $event_types = EventType::create($input);

        return $this->sendResponse($event_types->toArray(), 'Event type created successfully.');

    }

    public function show($id){
    	$event_types = EventType::find($id);

        if (is_null($event_types)) {

            return $this->sendError('Events not found.');
        }

        return $this->sendResponse($event_types->toArray(), 'Event type retrieved successfully.');

    }

    public function edit($id){
    	$event_types = EventType::find($id);
    }

    public function update(Request $request , $id){
    	$input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'description' => 'required',
            'color' => 'required',
            'is_Active' => 'boolean',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $event_types = EventType::find($id);
        if (is_null($event_types)) {
            return $this->sendError('Event type not found.');
        }

        $event_types->name = $input['name'];
        $event_types->description = $input['description'];
        $event_types->color = $input['color'];
        $event_types->is_Active = $input['is_Active'];
        $event_types->save();

        return $this->sendResponse($event_types->toArray(), 'Events updated successfully.');
    }

    public function destroy($id){
    	$event_types = Events::find($id);

        if (is_null($event_types)) {
            return $this->sendError('Event type not found.');
        }
        $event_types->delete();
        return $this->sendResponse($id, 'Tag deleted successfully.');
    }
    
}
