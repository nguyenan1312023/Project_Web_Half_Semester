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

			  	$scope.editorEnabledtime_primary_school = false;

			  	$scope.enableEditortime_primary_school = function () {
			  	    $scope.editorEnabledtime_primary_school = true;
			  	    $scope.editabletime_primary_school = $scope.time_primary_school;
			  	};

			  	$scope.disableEditortime_primary_school = function () {
			  	    $scope.editorEnabledtime_primary_school = false;
			  	};

			  	$scope.savetime_primary_school = function () {
			  	    $scope.time_primary_school = $scope.editabletime_primary_school;
			  	    $scope.disableEditortime_primary_school();

			  	};
			  	$scope.editorEnabledcontent_primary_school = false;

			  	$scope.enableEditorcontent_primary_school = function () {
			  	    $scope.editorEnabledcontent_primary_school = true;
			  	    $scope.editablecontent_primary_school = $scope.content_primary_school;
			  	};

			  	$scope.disableEditorcontent_primary_school = function () {
			  	    $scope.editorEnabledcontent_primary_school = false;
			  	};

			  	$scope.savecontent_primary_school = function () {
			  	    $scope.content_primary_school = $scope.editablecontent_primary_school;
			  	    $scope.disableEditorcontent_primary_school();

			  	};


			  	$scope.editorEnabledpart_secondary_school = false;

			  	$scope.enableEditorpart_secondary_school = function () {
			  	    $scope.editorEnabledpart_secondary_school = true;
			  	    $scope.editablepart_secondary_school = $scope.part_secondary_school;
			  	};

			  	$scope.disableEditorpart_secondary_school = function () {
			  	    $scope.editorEnabledpart_secondary_school = false;
			  	};

			  	$scope.savepart_secondary_school = function () {
			  	    $scope.part_secondary_school = $scope.editablepart_secondary_school;
			  	    $scope.disableEditorpart_secondary_school();

			  	};

			  	$scope.editorEnabledsecondary_school = false;

			  	$scope.enableEditorsecondary_school = function () {
			  	    $scope.editorEnabledsecondary_school = true;
			  	    $scope.editablesecondary_school = $scope.secondary_school;
			  	};

			  	$scope.disableEditorsecondary_school = function () {
			  	    $scope.editorEnabledsecondary_school = false;
			  	};

			  	$scope.savesecondary_school = function () {
			  	    $scope.secondary_school = $scope.editablesecondary_school;
			  	    $scope.disableEditorsecondary_school();

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




			  	$scope.editorEnabledtime_secondary_school = false;

			  	$scope.enableEditortime_secondary_school = function () {
			  	    $scope.editorEnabledtime_secondary_school = true;
			  	    $scope.editabletime_secondary_school = $scope.time_secondary_school;
			  	};

			  	$scope.disableEditortime_secondary_school = function () {
			  	    $scope.editorEnabledtime_secondary_school = false;
			  	};

			  	$scope.savetime_secondary_school = function () {
			  	    $scope.time_secondary_school = $scope.editabletime_secondary_school;
			  	    $scope.disableEditortime_secondary_school();

			  	};


			  	$scope.editorEnabledcontent_secondary_school = false;

			  	$scope.enableEditorcontent_secondary_school = function () {
			  	    $scope.editorEnabledcontent_secondary_school = true;
			  	    $scope.editablecontent_secondary_school = $scope.content_secondary_school;
			  	};

			  	$scope.disableEditorcontent_secondary_school = function () {
			  	    $scope.editorEnabledcontent_secondary_school = false;
			  	};

			  	$scope.savecontent_secondary_school = function () {
			  	    $scope.content_secondary_school = $scope.editablecontent_secondary_school;
			  	    $scope.disableEditorcontent_secondary_school();

			  	};


			  	$scope.editorEnabledpart_hight_school = false;

			  	$scope.enableEditorpart_hight_school = function () {
			  	    $scope.editorEnabledpart_hight_school = true;
			  	    $scope.editablepart_hight_school = $scope.part_hight_school;
			  	};

			  	$scope.disableEditorpart_hight_school = function () {
			  	    $scope.editorEnabledpart_hight_school = false;
			  	};

			  	$scope.savepart_hight_school = function () {
			  	    $scope.part_hight_school = $scope.editablepart_hight_school;
			  	    $scope.disableEditorpart_hight_school();

			  	};

			  	$scope.editorEnabledhight_school = false;

			  	$scope.enableEditorhight_school = function () {
			  	    $scope.editorEnabledhight_school = true;
			  	    $scope.editablehight_school = $scope.hight_school;
			  	};

			  	$scope.disableEditorhight_school = function () {
			  	    $scope.editorEnabledhight_school = false;
			  	};

			  	$scope.savehight_school = function () {
			  	    $scope.hight_school = $scope.editablehight_school;
			  	    $scope.disableEditorhight_school();

			  	};


			  	$scope.editorEnabledaddress_hight_school = false;

			  	$scope.enableEditoraddress_hight_school = function () {
			  	    $scope.editorEnabledaddress_hight_school = true;
			  	    $scope.editableaddress_hight_school = $scope.address_hight_school;
			  	};

			  	$scope.disableEditoraddress_hight_school = function () {
			  	    $scope.editorEnabledaddress_hight_school = false;
			  	};

			  	$scope.saveaddress_hight_school = function () {
			  	    $scope.address_hight_school = $scope.editableaddress_hight_school;
			  	    $scope.disableEditoraddress_hight_school();

			  	};




			  	$scope.editorEnabledtime_hight_school = false;

			  	$scope.enableEditortime_hight_school = function () {
			  	    $scope.editorEnabledtime_hight_school = true;
			  	    $scope.editabletime_hight_school = $scope.time_hight_school;
			  	};

			  	$scope.disableEditortime_hight_school = function () {
			  	    $scope.editorEnabledtime_hight_school = false;
			  	};

			  	$scope.savetime_hight_school = function () {
			  	    $scope.time_hight_school = $scope.editabletime_hight_school;
			  	    $scope.disableEditortime_hight_school();

			  	};

			  	$scope.editorEnabledcontent_hight_school = false;

			  	$scope.enableEditorcontent_hight_school = function () {
			  	    $scope.editorEnabledcontent_hight_school = true;
			  	    $scope.editablecontent_hight_school = $scope.content_hight_school;
			  	};

			  	$scope.disableEditorcontent_hight_school = function () {
			  	    $scope.editorEnabledcontent_hight_school = false;
			  	};

			  	$scope.savecontent_hight_school = function () {
			  	    $scope.content_hight_school = $scope.editablecontent_hight_school;
			  	    $scope.disableEditorcontent_hight_school();

			  	};

			  	    $scope.editorEnabledpart_badminton = false;

			  	    $scope.enableEditorpart_badminton = function () {
			  	        $scope.editorEnabledpart_badminton = true;
			  	        $scope.editablepart_badminton = $scope.part_badminton;
			  	    };

			  	    $scope.disableEditorpart_badminton = function () {
			  	        $scope.editorEnabledpart_badminton = false;
			  	    };

			  	    $scope.savepart_badminton = function () {
			  	        $scope.part_badminton = $scope.editablepart_badminton;
			  	        $scope.disableEditorpart_badminton();

			  	};


			  	    $scope.editorEnabledwith_badminton = false;

			  	    $scope.enableEditorwith_badminton = function () {
			  	        $scope.editorEnabledwith_badminton = true;
			  	        $scope.editablewith_badminton = $scope.with_badminton;
			  	    };

			  	    $scope.disableEditorwith_badminton = function () {
			  	        $scope.editorEnabledwith_badminton = false;
			  	    };

			  	    $scope.savewith_badminton = function () {
			  	        $scope.with_badminton = $scope.editablewith_badminton;
			  	        $scope.disableEditorwith_badminton();

			  	    };

			  	    $scope.editorEnabledtime_badminton = false;

			  	    $scope.enableEditortime_badminton = function () {
			  	        $scope.editorEnabledtime_badminton = true;
			  	        $scope.editabletime_badminton = $scope.time_badminton;
			  	    };

			  	    $scope.disableEditortime_badminton = function () {
			  	        $scope.editorEnabledtime_badminton = false;
			  	    };

			  	    $scope.savetime_badminton = function () {
			  	        $scope.time_badminton = $scope.editabletime_badminton;
			  	        $scope.disableEditortime_badminton();

			  	    };

			  	    $scope.editorEnabledcontent_badminton = false;

			  	    $scope.enableEditorcontent_badminton = function () {
			  	        $scope.editorEnabledcontent_badminton = true;
			  	        $scope.editablecontent_badminton = $scope.content_badminton;
			  	    };

			  	    $scope.disableEditorcontent_badminton = function () {
			  	        $scope.editorEnabledcontent_badminton = false;
			  	    };

			  	    $scope.savecontent_badminton = function () {
			  	        $scope.content_badminton = $scope.editablecontent_badminton;
			  	        $scope.disableEditorcontent_badminton();

			  	    };


			  	    $scope.editorEnabledpart_guitar = false;

			  	    $scope.enableEditorpart_guitar = function () {
			  	        $scope.editorEnabledpart_guitar = true;
			  	        $scope.editablepart_guitar = $scope.part_guitar;
			  	    };

			  	    $scope.disableEditorpart_guitar = function () {
			  	        $scope.editorEnabledpart_guitar = false;
			  	    };

			  	    $scope.savepart_guitar = function () {
			  	        $scope.part_guitar = $scope.editablepart_guitar;
			  	        $scope.disableEditorpart_guitar();

			  	    };


			  	    $scope.editorEnabledwith_guitar = false;

			  	    $scope.enableEditorwith_guitar = function () {
			  	        $scope.editorEnabledwith_guitar = true;
			  	        $scope.editablewith_guitar = $scope.with_guitar;
			  	    };

			  	    $scope.disableEditorwith_guitar = function () {
			  	        $scope.editorEnabledwith_guitar = false;
			  	    };

			  	    $scope.savewith_guitar = function () {
			  	        $scope.with_guitar = $scope.editablewith_guitar;
			  	        $scope.disableEditorwith_guitar();

			  	    };

			  	    $scope.editorEnabledtime_guitar = false;

			  	    $scope.enableEditortime_guitar = function () {
			  	        $scope.editorEnabledtime_guitar = true;
			  	        $scope.editabletime_guitar = $scope.time_guitar;
			  	    };

			  	    $scope.disableEditortime_guitar = function () {
			  	        $scope.editorEnabledtime_guitar = false;
			  	    };

			  	    $scope.savetime_guitar = function () {
			  	        $scope.time_guitar = $scope.editabletime_guitar;
			  	        $scope.disableEditortime_guitar();

			  	    };

			  	    $scope.editorEnabledcontent_guitar = false;

			  	    $scope.enableEditorcontent_guitar = function () {
			  	        $scope.editorEnabledcontent_guitar = true;
			  	        $scope.editablecontent_guitar = $scope.content_guitar;
			  	    };

			  	    $scope.disableEditorcontent_guitar = function () {
			  	        $scope.editorEnabledcontent_guitar = false;
			  	    };

			  	    $scope.savecontent_guitar = function () {
			  	        $scope.content_guitar = $scope.editablecontent_guitar;
			  	        $scope.disableEditorcontent_guitar();

			  	    };

			  	    $scope.editorEnabledtitle_care_about = false;

			  	    $scope.enableEditortitle_care_about = function () {
			  	        $scope.editorEnabledtitle_care_about = true;
			  	        $scope.editabletitle_care_about = $scope.title_care_about;
			  	    };

			  	    $scope.disableEditortitle_care_about = function () {
			  	        $scope.editorEnabledtitle_care_about = false;
			  	    };

			  	    $scope.savetitle_care_about = function () {
			  	        $scope.title_care_about = $scope.editabletitle_care_about;
			  	        $scope.disableEditortitle_care_about();

			  	    };

			  	    $scope.editorEnabledNum_1_care_about = false;

			  	    $scope.enableEditorNum_1_care_about = function () {
			  	        $scope.editorEnabledNum_1_care_about = true;
			  	        $scope.editableNum_1_care_about = $scope.Num_1_care_about;
			  	    };

			  	    $scope.disableEditorNum_1_care_about = function () {
			  	        $scope.editorEnabledNum_1_care_about = false;
			  	    };

			  	    $scope.saveNum_1_care_about = function () {
			  	        $scope.Num_1_care_about = $scope.editableNum_1_care_about;
			  	        $scope.disableEditorNum_1_care_about();

			  	    };

			  	    $scope.editorEnabledNum_2_care_about = false;

			  	    $scope.enableEditorNum_2_care_about = function () {
			  	        $scope.editorEnabledNum_2_care_about = true;
			  	        $scope.editableNum_2_care_about = $scope.Num_2_care_about;
			  	    };

			  	    $scope.disableEditorNum_2_care_about = function () {
			  	        $scope.editorEnabledNum_2_care_about = false;
			  	    };

			  	    $scope.saveNum_2_care_about = function () {
			  	        $scope.Num_2_care_about = $scope.editableNum_2_care_about;
			  	        $scope.disableEditorNum_2_care_about();

			  	    };

			  	    $scope.editorEnabledNum_3_care_about = false;

			  	    $scope.enableEditorNum_3_care_about = function () {
			  	        $scope.editorEnabledNum_3_care_about = true;
			  	        $scope.editableNum_3_care_about = $scope.Num_3_care_about;
			  	    };

			  	    $scope.disableEditorNum_3_care_about = function () {
			  	        $scope.editorEnabledNum_3_care_about = false;
			  	    };

			  	    $scope.saveNum_3_care_about = function () {
			  	        $scope.Num_3_care_about = $scope.editableNum_3_care_about;
			  	        $scope.disableEditorNum_3_care_about();

			  	    };


			  	    $scope.editorEnabledtitle_join = false;

			  	    $scope.enableEditortitle_join = function () {
			  	        $scope.editorEnabledtitle_join = true;
			  	        $scope.editabletitle_join = $scope.title_join;
			  	    };

			  	    $scope.disableEditortitle_join = function () {
			  	        $scope.editorEnabledtitle_join = false;
			  	    };

			  	    $scope.savetitle_join = function () {
			  	        $scope.title_join = $scope.editabletitle_join;
			  	        $scope.disableEditortitle_join();

			  	    };


			  	    $scope.editorEnabledNum_1_join = false;

			  	    $scope.enableEditorNum_1_join = function () {
			  	        $scope.editorEnabledNum_1_join = true;
			  	        $scope.editableNum_1_join = $scope.Num_1_join;
			  	    };

			  	    $scope.disableEditorNum_1_join = function () {
			  	        $scope.editorEnabledNum_1_join = false;
			  	    };

			  	    $scope.saveNum_1_join = function () {
			  	        $scope.Num_1_join = $scope.editableNum_1_join;
			  	        $scope.disableEditorNum_1_join();

			  	    };

			  	    $scope.editorEnabledNum_2_join = false;

			  	    $scope.enableEditorNum_2_join = function () {
			  	        $scope.editorEnabledNum_2_join = true;
			  	        $scope.editableNum_2_join = $scope.Num_2_join;
			  	    };

			  	    $scope.disableEditorNum_2_join = function () {
			  	        $scope.editorEnabledNum_2_join = false;
			  	    };

			  	    $scope.saveNum_2_join = function () {
			  	        $scope.Num_2_join = $scope.editableNum_2_join;
			  	        $scope.disableEditorNum_2_join();

			  	    };

			  	    $scope.editorEnabledNum_3_join = false;

			  	    $scope.enableEditorNum_3_join = function () {
			  	        $scope.editorEnabledNum_3_join = true;
			  	        $scope.editableNum_3_join = $scope.Num_3_join;
			  	    };

			  	    $scope.disableEditorNum_3_join = function () {
			  	        $scope.editorEnabledNum_3_join = false;
			  	    };

			  	    $scope.saveNum_3_join = function () {
			  	        $scope.Num_3_join = $scope.editableNum_3_join;
			  	        $scope.disableEditorNum_3_join();

			  	    };


                    }]);
        
        

