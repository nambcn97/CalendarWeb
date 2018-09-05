<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->string('name');
            $table->text('description');
            $table->datetime('Date_of_event')->index();
            $table->timestamps('');
            $table->text('Location');
            $table->integer('Event_type_id')->unsigned();;
            
            $table->text('Note');
            $table->boolean('Is_Active');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
