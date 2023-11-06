<?php 

require_once "core/system.php";
$system = new core\SYSTEM;



if(isset($_POST['filter'])){
	$max = $_POST['max'];
	$min = $_POST['min'];
	@$inner = $_POST['inner'];
	@$outer = $_POST['outer'];
	@$inner = implode(",", $inner);
	@$outer = implode(",", $outer);
	@$discount = $_POST['discount'];
	/* min max */if(empty($_GET["gender"]) && empty($_GET['season']) && empty($inner) && empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*","`price`>".$min." && `price`<".$max);
	}else if(empty($_GET['season']) && !empty($_GET['gender']) && empty($inner) && empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*","`gender`='".$_GET['gender']."'"." && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && empty($_GET['gender']) && empty($inner) && empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."'"." && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && !empty($_GET['gender']) && empty($inner) && empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."' && `gender`='".$_GET['gender']."'"." && `price`>".$min." && `price`<".$max);
	}/* inner isset */else if(empty($_GET["gender"]) && empty($_GET['season']) && !empty($inner) && empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*","`price`>".$min." && `inner_material`='".$inner."'  && `price`<".$max);
	}else if(empty($_GET['season']) && !empty($_GET['gender']) && !empty($inner) && empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*","`gender`='".$_GET['gender']."'"." && `inner_material`='".$inner."' && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && empty($_GET['gender']) && !empty($inner) && empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."'"." && `inner_material`='".$inner."'  && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && !empty($_GET['gender']) && !empty($inner) && empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."' && `inner_material`='".$inner."'  && `gender`='".$_GET['gender']."'"." && `price`>".$min." && `price`<".$max);
	}/* outer isset */else if(empty($_GET["gender"]) && empty($_GET['season']) && empty($inner) && !empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*","`price`>".$min." && `outer_material`='".$outer."'  && `price`<".$max);
	}else if(empty($_GET['season']) && !empty($_GET['gender']) && empty($inner) && !empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*","`gender`='".$_GET['gender']."'"." && `outer_material`='".$outer."' && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && empty($_GET['gender']) && empty($inner) && !empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."'"." && `outer_material`='".$outer."'  && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && !empty($_GET['gender']) && empty($inner) && !empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."' && `outer_material`='".$outer."'  && `gender`='".$_GET['gender']."'"." && `price`>".$min." && `price`<".$max);
	}/* outer and inner isset */else if(empty($_GET["gender"]) && empty($_GET['season']) && !empty($inner) && !empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*","`price`>".$min." && `outer_material`='".$outer."' && `inner_material`='".$inner."' && `price`<".$max);
	}else if(empty($_GET['season']) && !empty($_GET['gender']) && !empty($inner) && !empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*","`gender`='".$_GET['gender']."'"." && `inner_material`='".$inner."' && `outer_material`='".$outer."' && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && empty($_GET['gender']) && !empty($inner) && !empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."'"." && `inner_material`='".$inner."' && `outer_material`='".$outer."'  && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && !empty($_GET['gender']) && !empty($inner) && !empty($outer) && $discount === NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."' && `inner_material`='".$inner."' && `outer_material`='".$outer."'  && `gender`='".$_GET['gender']."'"." && `price`>".$min." && `price`<".$max);
	}/* disccount isset */else if(empty($_GET["gender"]) && empty($_GET['season']) && empty($inner) && empty($outer) && $discount !== NULL){
		$data = $system->db->get_data("product","*","`price`>".$min." && `discount`>='".$discount."'  && `price`<".$max);
	}else if(empty($_GET['season']) && !empty($_GET['gender']) && empty($inner) && empty($outer) && $discount !== NULL){
		$data = $system->db->get_data("product","*","`gender`='".$_GET['gender']."'"." && `discount`>='".$discount."' && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && empty($_GET['gender']) && empty($inner) && empty($outer) && $discount !== NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."'"." && `discount`>='".$discount."'  && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && !empty($_GET['gender']) && empty($inner) && empty($outer) && $discount !== NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."' && `discount`>='".$discount."'  && `gender`='".$_GET['gender']."'"." && `price`>".$min." && `price`<".$max);
	}/* all isset */else if(empty($_GET["gender"]) && empty($_GET['season']) && !empty($inner) && !empty($outer) && $discount !== NULL){
		$data = $system->db->get_data("product","*","`price`>".$min." && `discount`>='".$discount."' && `outer_material`='".$outer."' && `inner_material`='".$inner."' && `price`<".$max);
	}else if(empty($_GET['season']) && !empty($_GET['gender']) && !empty($inner) && !empty($outer) && $discount !== NULL){
		$data = $system->db->get_data("product","*","`gender`='".$_GET['gender']."'"." && `discount`>='".$discount."' && `inner_material`='".$inner."' && `outer_material`='".$outer."' && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && empty($_GET['gender']) && !empty($inner) && !empty($outer) && $discount !== NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."'"." && `discount`>='".$discount."' && `inner_material`='".$inner."' && `outer_material`='".$outer."' && `price`>".$min." && `price`<".$max);
	}else if(!empty($_GET['season']) && !empty($_GET['gender']) && !empty($inner) && !empty($outer) && $discount !== NULL){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."' && `discount`>='".$discount."' && `inner_material`='".$inner."' && `outer_material`='".$outer."'  && `gender`='".$_GET['gender']."'"." && `price`>".$min." && `price`<".$max);
	}else{
		$data = "Not Found";
	}
	
}else{
	if(empty($_GET["gender"]) && empty($_GET['season'])){
		$data = $system->db->get_data("product","*");
	}else if(empty($_GET['season']) && !empty($_GET['gender'])){
		$data = $system->db->get_data("product","*","`gender`='".$_GET['gender']."'");
	}else if(!empty($_GET['season']) && empty($_GET['gender'])){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."'");
	}else if(!empty($_GET['season']) && !empty($_GET['gender'])){
		$data = $system->db->get_data("product","*", "`season`='".$_GET['season']."' && `gender`='".$_GET['gender']."'");
	}else{
		$data = $system->db->get_data("product","*");
	}
}

echo "<pre>";
var_dump($data);


 ?>
</pre><form method="post" action="#">
						Price
						<div>
							<div class="col-md-5 mb-3" style="display: inline-block;">
						      <label for="min">Min</label>
						      <input type="text" class="form-control" id="min" value="1" name="min">
						    </div>
						    <div class="col-md-5 mb-3" style="display: inline-block;">
						      <label for="max">max</label>
						      <input type="text" class="form-control" id="max" value="999999" name="max">
						    </div>
						</div>
					</div>
					<div>
						Outer Material
						<div style="margin-left: 15px;">
							<div>
								<input type="checkbox" name="outer[]" value="leather" id="b1"><label for="b1">Leather</label>
							</div>
							<div>
								<input type="checkbox" name="outer[]"  value="wool" id="b2"><label for="b2">Wool</label>
							</div>
						</div>
					</div>
					<div>
						Inner Material
						<div style="margin-left: 15px;">
							<div>
								<input type="checkbox" name="inner[]"  value="leather" id="a1"><label for="a1">Leather</label>
							</div>
							<div>
								<input type="checkbox" name="inner[]"  value="wool" id="a2"><label for="a2">Wool</label>
							</div>
						</div>
					</div>
					<div>
						Discount
						<div style="margin-left:15px;">
							<div>
								<input type="radio" name="discount" id="ds5" value="5">
								<label for="ds5">5% or more</label>
							</div>
							<div>
								<input type="radio" name="discount" id="ds15" value="15">
								<label for="ds15">15% or more</label>
							</div>
							<div>
								<input type="radio" name="discount" id="ds50" value="50">
								<label for="ds50">50% or more</label>
							</div>
							<div>
								<input type="radio" name="discount" id="five" value="75">
								<label for="ds75s">75% or more</label>
							</div>
						</div>
					</div>
					<input type="submit" name="filter" value="Filter" class="btn btn-primary">
					</form>