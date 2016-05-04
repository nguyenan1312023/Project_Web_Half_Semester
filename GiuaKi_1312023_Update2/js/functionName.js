            var mod = angular.module('1312023_CV',[])
                    mod.controller('ctr',['$scope', '$http', function ($scope, $http) {
                    $http.get('Json/summary.json').success(function(data){
                       $scope.summary = data.content;
						 	
					});

					$http.get('Json/basicInfo.json').success(function(data){
                       
						 $scope.Name = data.name;
						 $scope.Locate = data.locate;
						 $scope.University = data.university;
						$scope.Current = data.current;
					    $scope.Previous = data.previous;
					    $scope.Education = data.education;	
						 $scope.followers = data.followers;
						$scope.Link_contact = data.link_contact;
					});
		
					$http.get('Json/care-about.json').success(function(data){
					    $scope.title_care_about = data.title;
					    $scope.Num_1_care_about = data.Num_1;
					    $scope.Num_2_care_about = data.Num_2;
					    $scope.Num_3_care_about = data.Num_3;
					});

					$http.get('Json/education.json').success(function(data){
					    $scope.university_education = data.university;
					    $scope.degree_education = data.degree;
					    $scope.major_falcuty_education = data.major_falcuty;
					    $scope.time_education = data.time;
					});

					$http.get('Json/experience-badminton.json').success(function(data){
					    $scope.part_badminton = data.part;
					    $scope.with_badminton = data.with;
					    $scope.time_badminton = data.time;
					    $scope.content_badminton = data.content;
					});
					$http.get('Json/experience-guitar.json').success(function(data){
					    $scope.part_guitar = data.part;
					    $scope.with_guitar = data.with;
					    $scope.time_guitar = data.time;
					    $scope.content_guitar= data.content;
					});
						
					$http.get('Json/experience-HightSchool.json').success(function(data){
					    $scope.part_hight_school = data.part;
					    $scope.hight_school = data.school;
					    $scope.address_hight_school = data.address;
					    $scope.time_hight_school = data.time;
					    $scope.content_hight_school = data.content;
					});
					
					$http.get('Json/experience-SecondarySchool.json').success(function(data){
					    $scope.part_secondary_school = data.part;
					    $scope.secondary_school = data.school;
					    $scope.address_secondary_school = data.address;
					    $scope.time_secondary_school = data.time;
					    $scope.content_secondary_school = data.content;
					});
					$http.get('Json/experience-PrimarySchool.json').success(function (data) {
					    $scope.part_primary_school = data.part;
					    $scope.primary_school = data.school;
					    $scope.address_primary_school = data.address;
					    $scope.time_primary_school = data.time;
					    $scope.content_primary_school = data.content;
					});
					$http.get('Json/experience-university.json').success(function (data) {
					    $scope.part_student = data.part;
					    $scope.Address_student = data.address;
					    $scope.time_student = data.time;
					    $scope.content_student = data.content;
                        					   
					});

					$http.get('Json/other-skill.json').success(function(data){
					    $scope.title_other_skill = data.title;
					    $scope.Num_1_other_skill = data.Num_1;
					    $scope.Num_2_other_skill = data.Num_2;
					    $scope.Num_3_other_skill = data.Num_3;
					    $scope.Num_4_other_skill = data.Num_4;
					    
					 
					});
					
					$http.get('Json/Skill.json').success(function(data){
					    $scope.title_top_skill = data.title;
					    $scope.Num_1_top_skill = data.Num_1;
					    $scope.Num_2_top_skill = data.Num_2;
					    $scope.Num_3_top_skill = data.Num_3;
					    $scope.Num_4_top_skill = data.Num_4;
					    $scope.Num_5_top_skill = data.Num_5;
					    $scope.Num_6_top_skill = data.Num_6;
					   

					});
					
					
					$http.get('Json/take-part-in.json').success(function(data){
					    $scope.title_join = data.title;
					    $scope.Num_1_join = data.Num_1;
					    $scope.Num_2_join = data.Num_2;
					    $scope.Num_3_join = data.Num_3;
					    
					});
					
				$scope.editorEnabled = false;
			  
			  	$scope.enableEditor = function() {
			    $scope.editorEnabled = true;
			    $scope.editableTitle = $scope.Name;
			  	};
			  
			  	$scope.disableEditor = function() {
			    $scope.editorEnabled = false;
			  	};
			  
			  	$scope.save = function() {
			    $scope.Name = $scope.editableTitle;
			    $scope.disableEditor();
					
				};

				$scope.editorEnabledUniversity = false;
			  
			  	$scope.enableEditorUniversity = function() {
			    $scope.editorEnabledUniversity = true;
			    $scope.editableUniversity = $scope.University;
			  	};
			  
			  	$scope.disableEditorUniversity = function() {
			    $scope.editorEnabledUniversity = false;
			  	};
			  
			  	$scope.saveUniversity = function() {
			    $scope.University = $scope.editableUniversity;
			    $scope.disableEditorUniversity();
					
				};		


			  	$scope.editorEnabledLocate = false;

			  	$scope.enableEditorLocate = function () {
			  	    $scope.editorEnabledLocate = true;
			  	    $scope.editableLocate = $scope.Locate;
			  	};

			  	$scope.disableEditorLocate = function () {
			  	    $scope.editorEnabledLocate = false;
			  	};

			  	$scope.saveLocate = function () {
			  	    $scope.Locate = $scope.editableLocate;
			  	    $scope.disableEditorLocate();

			  	};

			  	$scope.editorEnabledCurrent = false;

			  	$scope.enableEditorCurrent = function () {
			  	    $scope.editorEnabledCurrent = true;
			  	    $scope.editableCurrent = $scope.Current;
			  	};

			  	$scope.disableEditorCurrent = function () {
			  	    $scope.editorEnabledCurrent = false;
			  	};

			  	$scope.saveCurrent = function () {
			  	    $scope.Current = $scope.editableCurrent;
			  	    $scope.disableEditorCurrent();

			  	};

			  	$scope.editorEnabledPrevious = false;

			  	$scope.enableEditorPrevious = function () {
			  	    $scope.editorEnabledPrevious = true;
			  	    $scope.editablePrevious = $scope.Previous;
			  	};

			  	$scope.disableEditorPrevious = function () {
			  	    $scope.editorEnabledPrevious = false;
			  	};

			  	$scope.savePrevious = function () {
			  	    $scope.Previous = $scope.editablePrevious;
			  	    $scope.disableEditorPrevious();

			  	};

			  	$scope.editorEnabledEducation = false;

			  	$scope.enableEditorEducation = function () {
			  	    $scope.editorEnabledEducation = true;
			  	    $scope.editableEducation = $scope.Education;
			  	};

			  	$scope.disableEditorEducation = function () {
			  	    $scope.editorEnabledEducation = false;
			  	};

			  	$scope.saveEducation = function () {
			  	    $scope.Education = $scope.editableEducation;
			  	    $scope.disableEditorEducation();

			  	};
					
			  	$scope.editorEnabledLink_contact = false;

			  	$scope.enableEditorLink_contact = function () {
			  	    $scope.editorEnabledLink_contact = true;
			  	    $scope.editableLink_contact = $scope.Link_contact;
			  	};

			  	$scope.disableEditorLink_contact = function () {
			  	    $scope.editorEnabledLink_contact = false;
			  	};

			  	$scope.saveLink_contact = function () {
			  	    $scope.Link_contact = $scope.editableLink_contact;
			  	    $scope.disableEditorLink_contact();

			  	};

			  	$scope.editorEnabledsummary = false;

			  	$scope.enableEditorsummary = function () {
			  	    $scope.editorEnabledsummary = true;
			  	    $scope.editablesummary = $scope.summary;
			  	};

			  	$scope.disableEditorsummary = function () {
			  	    $scope.editorEnabledsummary = false;
			  	};

			  	$scope.savesummary = function () {
			  	    $scope.summary = $scope.editablesummary;
			  	    $scope.disableEditorsummary();

			  	};

			  	$scope.editorEnabledpart_student = false;

			  	$scope.enableEditorpart_student = function () {
			  	    $scope.editorEnabledpart_student = true;
			  	    $scope.editablepart_student = $scope.part_student;
			  	};

			  	$scope.disableEditorpart_student = function () {
			  	    $scope.editorEnabledpart_student = false;
			  	};

			  	$scope.savepart_student = function () {
			  	    $scope.part_student = $scope.editablepart_student;
			  	    $scope.disableEditorpart_student();

			  	};

			  	$scope.editorEnabledAddress_student = false;

			  	$scope.enableEditorAddress_student = function () {
			  	    $scope.editorEnabledAddress_student = true;
			  	    $scope.editableAddress_student = $scope.Address_student;
			  	};

			  	$scope.disableEditorAddress_student = function () {
			  	    $scope.editorEnabledAddress_student = false;
			  	};

			  	$scope.saveAddress_student = function () {
			  	    $scope.Address_student = $scope.editableAddress_student;
			  	    $scope.disableEditorAddress_student();

			  	};
                
			  	$scope.editorEnabledtime_student = false;

			  	$scope.enableEditortime_student = function () {
			  	    $scope.editorEnabledtime_student = true;
			  	    $scope.editabletime_student = $scope.time_student;
			  	};

			  	$scope.disableEditortime_student = function () {
			  	    $scope.editorEnabledtime_student = false;
			  	};

			  	$scope.savetime_student = function () {
			  	    $scope.time_student = $scope.editabletime_student;
			  	    $scope.disableEditortime_student();

			  	};

			  	$scope.editorEnabledcontent_student = false;

			  	$scope.enableEditorcontent_student = function () {
			  	    $scope.editorEnabledcontent_student = true;
			  	    $scope.editablecontent_student = $scope.content_student;
			  	};

			  	$scope.disableEditorcontent_student = function () {
			  	    $scope.editorEnabledcontent_student = false;
			  	};

			  	$scope.savecontent_student = function () {
			  	    $scope.content_student = $scope.editablecontent_student;
			  	    $scope.disableEditorcontent_student();

			  	};

			  	$scope.editorEnabledpart_primary_school = false;

			  	$scope.enableEditorpart_primary_school = function () {
			  	    $scope.editorEnabledpart_primary_school = true;
			  	    $scope.editablepart_primary_school = $scope.part_primary_school;
			  	};

			  	$scope.disableEditorpart_primary_school = function () {
			  	    $scope.editorEnabledpart_primary_school = false;
			  	};

			  	$scope.savepart_primary_school = function () {
			  	    $scope.part_primary_school = $scope.editablepart_primary_school;
			  	    $scope.disableEditorpart_primary_school();

			  	};

			  	$scope.editorEnabledprimary_school = false;

			  	$scope.enableEditorprimary_school = function () {
			  	    $scope.editorEnabledprimary_school = true;
			  	    $scope.editableprimary_school = $scope.primary_school;
			  	};

			  	$scope.disableEditorprimary_school = function () {
			  	    $scope.editorEnabledprimary_school = false;
			  	};

			  	$scope.saveprimary_school = function () {
			  	    $scope.primary_school = $scope.editableprimary_school;
			  	    $scope.disableEditorprimary_school();

			  	};

			  	$scope.editorEnabledaddress_secondary_school = false;

			  	$scope.enableEditoraddress_secondary_school = function () {
			  	    $scope.editorEnabledaddress_secondary_school = true;
			  	    $scope.editableaddress_secondary_school = $scope.address_secondary_school;
			  	};

			  	$scope.disableEditoraddress_secondary_school = function () {
			  	    $scope.editorEnabledaddress_secondary_school = false;
			  	};

			  	$scope.saveaddress_secondary_school = function () {
			  	    $scope.address_secondary_school = $scope.editableaddress_secondary_school;
			  	    $scope.disableEditoraddress_secondary_school();

			  	};
            }]);
        
        

