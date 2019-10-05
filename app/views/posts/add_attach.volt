<h1>Pridať príspevok</h1>

    <div class="panel panel-default mt-4">
        <div class="panel-body panel-user panel-add">
            <form action="" method="POST">

            <div class="text">
                
                <input type="text" name="url" id="url" value="" class="w100 mb-0" placeholder="Url odkaz">
                
                <div class="embed_url box hide">
                    <a href="#" class="remove mb-1 iblock">Zmeniť url</a>

                    <input type="text" name="title" id="title" value="" class="hide w100" placeholder="Title">
                    <textarea name="content" id="content" class="hide w100 resize"  placeholder="Popis. Max. 500 znakov." maxlength="500" required autofocus></textarea>
                    
                    <div class="iframe_video video mt-1"></div>
                    <div class="image"><a href=""><img src=""></a></div>

                    <input type="hidden" name="url" id="url" value="">
                    <input type="hidden" name="domain" id="url" value="">

                    <label class="mt-2"><input type="checkbox" name="public" value="1" checked> Publikovať verejne</label>
                    
                    <button class="btn btn-primary pull-right">Pridať</button>
                    <div class="clearfix"></div>
                </div>
            </div>

            </form>
        </div>
    </div>