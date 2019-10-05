<h1>Pridať príspevok</h1>

    <div class="panel panel-default mt-4">
        <div class="panel-body panel-user panel-add">
            <form action="" method="POST">

            <div class="text">

                <select name="type" id="type">
                    <option value="">[Sekcia]</option>
                    <option value="2">Firmy a služby</option>
                    <option value="1">Práca</option>
                    <option value="3">Bývanie</option>
                    <option value="4">Doprava</option>
                    <option value="5">Bazár</option>
                </select>

                <select name="subtype" id="subtype" class="hide"></select>

                <div class="next_step">

                    <input type="text" name="title" id="title" value="" class="w100" placeholder="Title" autofocus>
                    <textarea name="description" id="description" class="w100 resize"  placeholder="Popis. Max. 500 znakov." maxlength="500" required></textarea>

                    <input type="text" name="email" id="email" value="" class="w100" placeholder="Email">
                    <input type="text" name="phone" id="phone" value="" class="w100" placeholder="Telefón">
                    <input type="text" name="url" id="url" value="" class="w100 hide" placeholder="Url adresa">

                    <input type="text" name="address" id="address" value="" class="w100 hide" placeholder="Ulica">
                    <input type="text" name="location" id="location" value="" class="w100" placeholder="Mesto">
                    <input type="hidden" name="location_id" id="location_id" value="">

                    <button class="btn btn-primary pull-right">Pridať</button>
                    <div class="clearfix"></div>
                </div>
            </div>

            </form>
        </div>
    </div>