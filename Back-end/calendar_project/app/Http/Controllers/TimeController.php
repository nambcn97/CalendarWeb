<?php

namespace App\Http\Controllers;

use Request;

use App\Time;

use App\Http\Controllers\APIBaseController as APIBaseController;

use Validator;

class TimeController extends APIBaseController
{
    public function index(){
    	$times = Time::all();
    	/*
			$events = Events:latest()->paginate(5);
    	*/
		return $this->sendResponse($times->toArray(), 'Time retrieved successfully.');
    }


    public function create(){
    }

    public function store(Request $request){
    	$input = Request::all();
    	$validator = Validator::make($input, [
            'name_of_event' => 'required',
            'date_of_event' => 'required',

        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());       

        }

        $times = Time::create($input);

        return $this->sendResponse($times->toArray(), 'Time created successfully.');

    }

    public function show($id){
    	$times = Time::find($id);

        if (is_null($times)) {

            return $this->sendError('Time not found.');
        }

        return $this->sendResponse($event_types->toArray(), 'Time retrieved successfully.');

    }

    public function edit($id){
    	$times = Time::find($id);
    }

    public function update(Request $request , $id){
    	$input = $request->all();

        $validator = Validator::make($input, [
            'name_of_event' => 'required',
            'date_of_event' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $times = Time::find($id);
        if (is_null($times)) {
            return $this->sendError('Time not found.');
        }

        $times->name_of_event = $input['name_of_event'];
        $times->date_of_event = $input['date_of_event'];
        $times->save();

        return $this->sendResponse($event_types->toArray(), 'Times updated successfully.');
    }

    public function destroy($id){
    	$times = Time::find($id);

        if (is_null($times)) {
            return $this->sendError('Time not found.');
        }

        $times->delete();
        return $this->sendResponse($id, 'Tag deleted successfully.');
    }
}
