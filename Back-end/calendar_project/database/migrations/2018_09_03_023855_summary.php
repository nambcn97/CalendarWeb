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
<<<<<<< HEAD
            $table->datetime('Date_of_event')->index();
            $table->foreign('Date_of_Event')->references('Date_of_event')->on('events');
            $table->string('Name_of_Event');
            $table->foreign('Event_string')->references('name')->on('Name_of_Event');
            $table->timestamps('Last_Modified');
            $table->foreign('Last_Modified')->references('Last_Modified')->on('events');
=======
            $table->datetime('date_of_event');
            $table->string('name_of_event');
            $table->timestamps('last_modified');
>>>>>>> 62c4726efddaf5f3a24e635d2bff5efae7f8d02d
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
