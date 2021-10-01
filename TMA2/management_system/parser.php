<?php

    function parse($str) {
        $out = 
        $root = simplexml_load_string($str);
        
        $out = buildNav($out, $root);
        
        $body = '<div class="content">';
        $body = buildBody($body, $root);
        $body = $body.'</div>';

        $out = $out.$body;

        echo $out;
    }

    function buildNav($out, $root) {
        $course_title = $root['name'];
        # Build the navbar
        $out = $out.'<div class="sub-nav"><div class="title">'.$course_title.'</div><div class="links">';
        $children = $root->children();
        foreach ($children as $child) {
            $name = $child['name'];
            $out = $out.'<a class="link sublink" id="'.$name.'">'.$name.'</a>';
        }
        $out = $out.'</div></div>';
        return $out;
    }

    function buildBody($body, $root) {
        foreach ($root->children() as $content) {
            $type = $content->getName();
            if ($type === 'unit') {
                $body = buildUnit($body, $content);
            } else {
                $body = buildQuiz($body, $content);
            }
        }

        return $body.'</div>';
    }

    function buildUnit($body, $unit) {
        $sections = $unit->children();
        $name = $unit['name'];
        $unit_html = '<div class="module unit" id="'.$name.'"><h1>'.$name.'</h1>';
        
        foreach($sections as $section) {
            $unit_html = $unit_html.'<div class="page">';
            $unit_html = buildUnitBody($unit_html, $section);
            $unit_html = $unit_html.'</div>';
        }

        return $body.$unit_html.'<div class="controls"><Button class="previousPage">Previous Page</Button><Button class="nextPage">Next Page</Button></div></div>';
    }

    function buildUnitBody($unit_html, $section) {
        foreach($section->children() as $element) {
            $name = $element->getName();
            if ($name === 'title') {
                $unit_html = $unit_html.'<h3>'.$element[0].'</h3>';
            } elseif ($name === 'subtitle') {
                $unit_html = $unit_html.'<h4>'.$element[0].'</h4>';
            } else {
                $unit_html = $unit_html.'<p>'.$element[0].'</p>';
            }
        }
        return $unit_html;
    }

    function buildQuiz($body, $quiz) {
        $questions = $quiz->children();
        $name = $quiz['name'];
        $quiz_html = '<div class="module quiz" id="'.$name.'"><h1>'.$name.'</h1><div class="quiz">';

        $idx = 0;
        foreach($questions as $question) {
            $idx++;
            $question_html = '<form answer="'.$question["answer"].'"><h4>Question '.$idx.'<div id="correction-q'.$idx.'"></div></h4>';
            $question_html = $question_html.'<p>'.$question['question'].'</p>';

            foreach($question->children() as $option) {
                $question_html = $question_html.'<p><input type="radio" name="q'.$idx.'" value="'.$option['option'].'">';
                $question_html = $question_html.'<label>'.$option[0].'</label></p>';
            }

            $question_html = $question_html.'</form>';
            $quiz_html = $quiz_html.$question_html;
        }

        return $body.$quiz_html.'</div><div class="quiz-controls"><button id="answers">Get Answers</button><button id="reset">Reset</button></div></div>';
    }

?>