<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Summary extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('summary', function (Blueprint $table) {
            $table->datetime('Date_of_event')->index();
            $table->foreign('Date_of_Event')->references('Date_of_event')->on('events');
            $table->string('Name_of_Event');
            $table->foreign('Event_string')->references('name')->on('Name_of_Event');
            $table->timestamps('Last_Modified');
            $table->foreign('Last_Modified')->references('Last_Modified')->on('events');
            });//
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {       
    Schema::dropIfExists('summary');//
    }
}
