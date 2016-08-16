var playlisturl = function (course, playlist, assessment) {
	if (course == "Bravo" && playlist == 'A') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/negative-numbers-introduction/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/number_line_2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/ordering-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/ordering_negative_numbers/,",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/adding-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/adding-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/adding_negative_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/negatives-absolute-value-pre-alg/add-subtract-negatives-pre-alg/adding_and_subtracting_negative_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/mult-div-negatives/multiplying-negative-real-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/mult-div-negatives/multiplying_and_dividing_negative_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimal-place-value/decimal-place-value/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-100/cc-early-math-add-ones-tens/understanding-place-value-while-adding-tens/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/significant-figures-tutorial/significant-figures/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/significant-figures-tutorial/significant_figures_1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimal-rounding-estimation/rounding_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/scientific-notation/scientific-notation/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/scientific-notation/scientific-notation-old/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/scienACCtific-notation/scientific_notation/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/radical-radicals/understanding-square-roots/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/radical-radicals/square_roots/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/world-of-exponents/introduction-to-exponents/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/world-of-exponents/raising-a-number-to-the-0th-and-1st-power/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/world-of-exponents/positive_and_zero_exponents/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/order-of-operations-ddp/introduction-to-order-of-operations/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/order-of-operations-ddp/order_of_operations_2/"

		];
		window.open(exercises[assessment],'_system','location=yes');
	}


	else if (course == "Bravo" && playlist == 'B') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/pre-algebra/rates-and-ratios/ratios-and-proportions/introduction-to-ratios-new-hd-version/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/rates-and-ratios/ratios-and-proportions/ratios-as-fractions-in-simplest-form/",
						"http://192.168.8.200:8008/learn/khan/math/in-sixth-grade-math/ratio-and-proportion/inda-ratio-proportion/ratio_word_problems/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/rates-and-ratios/rates-tutorial/rate_problems_0.5/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/perimeter/introduction-to-perimeter/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/perimeter/perimeter-of-a-shape/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/perimeter/perimeter_1/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/area-basics/measuring-area-with-unit-squares/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/area-basics/area_of_squares_and_rectangles/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/volume-introduction-rectangular/how-we-measure-volume/",
						"http://192.168.8.200:8008/learn/khan/math/in-eighth-grade-math/eighth-mensuration/volume-cube-cuboid-cylinder/measuring-volume-with-unit-cubes/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/volume-introduction-rectangular/measuring-volume-as-area-times-length/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/volume-introduction-rectangular/volume-of-a-rectangular-prism-or-box-examples/"
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/volume-introduction-rectangular/volume_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-foundations/alg-foundations-circum-area-circles/circles-radius-diameter-and-circumference/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/basic-geometry/circum-area-circles/find-the-radius-or-diameter-of-a-circle-from-the-circumference-or-area/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-foundations/copy-of-perimeter-area-tutorial/triangle-area-proofs/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-foundations/copy-of-perimeter-area-tutorial/area_of_triangles_1/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-volume-surface-area/basic-geo-volumes/cylinder-volume-and-surface-area/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/basic-geometry/volume-tutorial/solid_geometry/",
						"http://192.168.8.200:8008/learn/khan/math/probability/descriptive-statistics/central-tendency/statistics-intro-mean-median-and-mode/",
						"http://192.168.8.200:8008/learn/khan/math/probability/descriptive-statistics/centralaa-tendency/mean-median-and-mode/",
						"http://192.168.8.200:8008/learn/khan/math/probability/descriptive-statistics/central-tendency/mean_median_and_mode/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/algebra-functions/average-rate-of-change-word-problems/average-rate-of-change-word-problems/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	else if (course == "Bravo" && playlist == 'C') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-variables-and-expressions/writing-expressions-1/",
						"http://192.168.8.200:8008/learn/khan/math/in-sixth-grade-math/algebra-in/expressions-variables/writing-expressions-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-variables-and-expressions/writing_expressions_1/",
						"http://192.168.8.200:8008/learn/khan/math/in-seventh-grade-math/algebraic-expressions/finding-value-expression/evaluating_expressions_2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-manipulating-expressions/combining-like-terms/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-manipulating-expressions/combining-like-terms-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-manipulating-expressions/combining_like_terms_1/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/ditributive-property/distributive-property-example-1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-variables-and-expressions/evaluating-expressions-with-two-variables/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/applying-math-reasoning-topic/constructing-numeric-expressions/evaluating-an-expression-with-and-without-parentheses/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/introduction-to-algebra/alg1-intro-to-variables/evaluating_expressions_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-variables-and-expressions/evaluating_expressions_2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-solving-basic-equations/solving-one-step-equations-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-solving-basic-equations/one_step_equations/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/one-variable-linear-equations/old-school-equations/algebra-linear-equations-1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/one-variable-linear-equations/linear-equations-with-unknown-coefficients/solving_for_a_variable/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/inequalities-using-multiplication-and-division/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/one-step-inequalities-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/one_step_inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/solving-2-step-inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/linear_inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-coordinate-plan/descartes-and-cartesian-coordinates/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-coordinate-plan/the-coordinate-plane/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-coordinate-plane/copy-of-cc-6th-coordinate-plane/graphing-points-exercise/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-coordinate-plan/plot-ordered-pairs/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-coordinate-plane/copy-of-cc-6th-coordinate-plane/graphing_points/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-coordinate-plane/copy-of-cc-6th-coordinate-plane/identifying_points_1/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	else if (course == "Charlie" && playlist == 'A') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/number-sets/number-sets/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/number-sets/number-sets-2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/number-sets/number-sets-3/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/exponent-properties/exponent_rules/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/negative-exponents-tutorial/negative-exponents/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/negative-exponents-tutorial/zero-negative-and-fractional-exponents/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-equation-word-problems/linear-equation-word-problem-example/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	else if (course == "Charlie" && playlist == 'B') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/intro-to-matrices/introduction-to-the-matrix/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/intro-to-matrices/matrix_dimensions/",
						"http://192.168.8.200:8008/learn/khan/math/linear-algebra/matrix-transformations/matrix-transpose/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/multiplying-matrices-by-scalars/scalar-multiplication/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/adding-and-subtracting-matrices/solve-matrix-equations-add-sub/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/properties-of-matrix-multiplication/zero-matrix/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/multiplying_a_matrix_by_a_matrix/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/determinant-of-2x2-matrix/matrix_determinant/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/intro-to-matrix-inverses/inverse-matrix-part-1/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/intro-to-matrix-inverses/determine-inverse-matrices/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/representing-systems-with-matrices/represent-systems-with-matrices/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-arithmetic-squences/arithmetic-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/constructing-arithmetic-sequences/finding-the-100th-term-in-a-sequence/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/sequences-and-series/copy-of-sequences-review/arithmetic_sequences_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-sequences/recursive-formulas-for-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-sequences/evaluating-sequences-in-recursive-form/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-arithmetic-squences/extending-arithmetic-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/constructing-arithmetic-sequences/explicit-formulas-for-arithmetic-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/constructing-arithmetic-sequences/explicit-formulas-for-arithmetic-sequences_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-geometric-sequences/geometric-sequences-introduction/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-geometric-sequences/extending-geometric-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-geometric-sequences/geometric_sequences_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-geometric-sequences/geometric_sequences_2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/modeling-with-sequences/modeling-situations-with-arithmetic-and-geometric-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/modeling-with-sequences/recursive_explicit/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/analytic-geometry-topic/distance-and-midpoints/midpoint-formula/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/analytic-geometry-topic/distance-and-midpoints/midpoint_formula/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-pythagorean-topic/basic-geo-pythagorean-theorem/distance-formula/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-pythagorean-topic/basic-geo-pythagorean-theorem/distance_formula/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-slope/graphical-slope-of-a-line/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/secant-line-slope-tangent/slope-of-a-line-secant-to-a-curve/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-equation-of-a-line/equation-of-a-line-hairier-example/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/two-var-linear-equations/forms-of-two-var-linear-equations/writing-the-equation-of-a-line-in-any-form/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/two-var-linear-equations/standard-form/standard-form-for-linear-equations/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-slope-intercept/graph-from-slope-intercept-equation/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/parallel-and-perpendicular-lines-intro/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/recognizing-parallel-and-perpendicular-lines/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

};