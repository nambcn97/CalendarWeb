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
            $table->datetime('date_of_event');
            $table->string('name_of_event');
            $table->timestamps('last_modified');
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
