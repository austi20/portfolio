(function () {
  const portfolioProjects = [
    {
      slug: "telco-customer-churn",
      section: "projects",
      cardType: "Machine Learning Case Study",
      title: "Telco Customer Churn Prediction",
      artClass: "art-churn",
      badge: "ML",
      technologies: ["Python", "pandas", "scikit-learn"],
      landingSummary:
        "End-to-end churn modeling case study using 7,000+ customer records to engineer retention signals, compare classification models, and translate risk patterns into practical business actions.",
      repoUrl: "https://github.com/austi20/Telco-Customer-Churn-Model",
      detailPage: "telco-customer-churn.html",
      heroSummary:
        "A recruiter-friendly case study on how machine learning can help a telecom company identify customers at risk of leaving and turn that analysis into practical retention actions.",
      executiveSummary:
        "This project predicts customer churn for a telecom provider using customer account, contract, service, and billing data. I cleaned the dataset, engineered retention-focused features, compared logistic regression with random forest, and translated the output into business guidance on which customers to prioritize and why.",
      atAGlance: [
        {
          label: "Problem",
          value: "Spot likely churn before revenue is lost"
        },
        {
          label: "Methods",
          value: "Data cleaning, feature engineering, model comparison"
        },
        {
          label: "Outcome",
          value: "Clear retention signals tied to contract type, tenure, and service mix"
        }
      ],
      overview: {
        paragraphs: [
          "Customer churn is a practical business problem: when a customer leaves, the company loses future revenue and has to spend more to replace that account.",
          "I framed this work as an applied analytics case study rather than a notebook exercise. The goal was not only to build a model, but to explain the results in a way that a business stakeholder could use."
        ]
      },
      objective: {
        paragraphs: [
          "The business objective was to identify which customers were most likely to cancel service so a retention team could intervene earlier.",
          "A useful solution needed to do two things well: rank customers by risk and explain which factors were most associated with churn."
        ],
        bullets: [
          "Prioritize customers who are most likely to leave",
          "Highlight the behaviors and account characteristics tied to churn",
          "Turn model output into practical retention recommendations"
        ]
      },
      dataset: {
        paragraphs: [
          "The project uses the IBM Telco Customer Churn dataset, which contains one record per customer and a final churn outcome of either yes or no.",
          "The data covers customer demographics, contract terms, internet and support services, payment behavior, and billing totals. In plain terms, it gives a full picture of what a customer has, how they pay, and whether they stayed."
        ],
        bullets: [
          "7,043 customer records",
          "Target outcome: whether the customer churned",
          "Fields include contract type, tenure, services used, monthly charges, and payment method"
        ]
      },
      approach: {
        paragraphs: [
          "I kept the modeling process simple enough to explain, but structured enough to be credible as applied analytical work.",
          "The workflow focused on preparing the data, creating features that were easier to interpret, testing two model types, and comparing the tradeoffs between them."
        ],
        steps: [
          {
            title: "Prepare the raw customer data",
            description:
              "I cleaned missing billing values, standardized text fields, and converted the churn outcome into a format the models could learn from."
          },
          {
            title: "Engineer features that match the business problem",
            description:
              "I created features such as tenure bands, total services used, and new-customer flags so the analysis could reflect customer lifecycle and service adoption instead of only raw columns."
          },
          {
            title: "Compare interpretable and pattern-driven models",
            description:
              "Logistic regression helped explain the strongest churn drivers, while random forest tested whether a more flexible model could improve overall classification performance."
          }
        ]
      },
      results: {
        paragraphs: [
          "The two models were useful in different ways. Logistic regression was strongest for ranking churn risk, while random forest gave the best overall balance for yes-or-no classification.",
          "That matters in practice because a retention team may care more about a ranked outreach list in one setting and a balanced operational classifier in another."
        ],
        highlights: [
          {
            label: "Risk ranking",
            value: "ROC AUC 0.847",
            description:
              "The logistic regression model did a strong job separating higher-risk customers from lower-risk customers, which is useful when deciding who should be contacted first."
          },
          {
            label: "Classification balance",
            value: "Accuracy 0.772",
            description:
              "The random forest model produced the best overall balance on yes-or-no churn predictions, making it the stronger all-purpose classifier in this project."
          },
          {
            label: "Finding at-risk customers",
            value: "Recall 0.794",
            description:
              "The logistic regression model caught most churn cases in the test set, which is important when the cost of missing a likely cancellation is high."
          }
        ]
      },
      insights: {
        paragraphs: [
          "The most valuable outcome of the project was not the model score alone. It was the ability to connect that score to business decisions a retention team could act on."
        ],
        bullets: [
          "Retention efforts should start with month-to-month customers, especially during the first year of service.",
          "Payment method and service bundle choices added useful context beyond contract length alone.",
          "Longer contracts looked materially more stable, which makes plan migration a realistic retention lever.",
          "The model comparison was most useful because it supported both prioritization and explanation, not just prediction.",
          "Why this matters: the project turns churn scores into a more focused outreach strategy instead of a generic customer list."
        ]
      },
      visualSections: [
        {
          placement: "after-approach",
          title: "Behavior patterns before modeling",
          intro:
            "I placed this figure here because it shows the raw customer patterns that informed the later feature engineering and retention framing.",
          figures: [
            {
              src: "../assets/projects/telco-customer-churn/customer-churn-behavior-analysis.png",
              alt: "Composite churn chart showing overall churn counts, churn rate by contract type, tenure distribution by churn status, and monthly charges by churn status.",
              title: "Customer behavior snapshot",
              caption:
                "These charts show that churn was much more common among month-to-month customers and newer accounts, with higher monthly charges showing up more often for customers who left. It matters because those patterns explain why contract length, tenure, and billing signals became key inputs in the model."
            }
          ]
        },
        {
          placement: "after-results",
          title: "Model comparison visuals",
          intro:
            "This figure sits after the results section because it makes the tradeoff between the two model choices easy to see at a glance.",
          figures: [
            {
              src: "../assets/projects/telco-customer-churn/customer-churn-model-performance.png",
              alt: "Model comparison figure with a performance bar chart, confusion matrices for logistic regression and random forest, and an ROC curve comparison.",
              title: "Prediction tradeoff",
              caption:
                "This comparison shows a practical tradeoff instead of one perfect winner: logistic regression separated higher- and lower-risk customers slightly better, while random forest was more balanced on straight yes-or-no predictions. That matters because a retention team may want ranking for outreach lists or cleaner classification for day-to-day operations."
            }
          ]
        }
      ],
      repository: {
        paragraphs: [
          "The repository includes the full Python pipeline, notebook presentation, outputs, and supporting files. The link is kept visible for anyone who wants to review the original implementation in more detail."
        ]
      },
      nextSteps: {
        paragraphs: [
          "If I continued this project, I would focus on making the model more decision-ready rather than only improving the score."
        ],
        bullets: [
          "Tune decision thresholds around business cost, not only default model settings",
          "Add probability calibration so risk scores are easier to trust operationally",
          "Include customer value and retention cost to prioritize the most important accounts",
          "Test additional models and cross-validation to strengthen confidence in the results"
        ]
      },
      plainOverview:
        "This project looks at which telecom customers are most likely to cancel service and why. It turns a machine learning notebook into a business-focused case study that a non-technical reader can follow from the problem to the recommendation.",
      quickFacts: [
        { label: "Dataset", value: "7,043 customer records" },
        { label: "Models", value: "Logistic regression and random forest" },
        { label: "Best ROC AUC", value: "0.847" }
      ],
      findingsHeading: "Key findings",
      findings: [
        "Customers on month-to-month contracts showed the highest churn risk.",
        "Short tenure was a strong warning sign, especially for new customers in their first year.",
        "Fiber internet, electronic checks, and missing support add-ons were tied to higher churn.",
        "Two-year contracts were consistently associated with much lower risk."
      ],
      readmeSections: [
        {
          title: "What the project does",
          paragraphs: [
            "The goal was to predict which customers were likely to leave so a telecom company could act earlier with retention offers.",
            "The write-up focuses on practical business questions rather than only model scores."
          ]
        },
        {
          title: "How the data was prepared",
          paragraphs: [
            "The dataset includes customer demographics, contract details, service usage, and billing information.",
            "Before modeling, the project cleaned missing billing values, standardized text fields, and created a few easier-to-interpret features such as customer age in the lifecycle and total services used."
          ],
          bullets: [
            "Fixed blank values in TotalCharges",
            "Converted churn into a yes-or-no prediction target",
            "Added features like tenure bands, service counts, and new-customer flags"
          ]
        },
        {
          title: "How the models were compared",
          paragraphs: [
            "Two model types were tested: a logistic regression model for clear coefficient-based interpretation and a random forest model for stronger pattern detection.",
            "The project compares them with accuracy, recall, F1 score, ROC AUC, and feature importance outputs so the results can be discussed in plain language."
          ]
        },
        {
          title: "Why it matters",
          paragraphs: [
            "The final recommendations are actionable: focus outreach on newer customers, reduce friction around payment methods, and package support/security services for higher-risk accounts."
          ]
        }
      ],
      snippets: [
        {
          title: "Feature engineering for retention signals",
          language: "python",
          explanation:
            "This short block creates business-friendly features so the model can reason about customer age, service adoption, and bundle behavior instead of only raw columns.",
          code: `featured["tenure_band"] = pd.cut(
    featured["tenure"],
    bins=[-1, 12, 24, 48, 60, 72],
    labels=["0-12 months", "13-24 months", "25-48 months", "49-60 months", "61-72 months"],
)

featured["total_services"] = featured[service_columns].apply(
    lambda row: sum(value == "Yes" for value in row), axis=1
)
featured["is_new_customer"] = np.where(featured["tenure"] <= 12, "Yes", "No")`
        },
        {
          title: "Building two models in one workflow",
          language: "python",
          explanation:
            "The project keeps the preprocessing step shared, then swaps in two different model types so performance can be compared fairly.",
          code: `models = {
    "Logistic Regression": Pipeline(
        steps=[("preprocessor", preprocessor), ("model", LogisticRegression(max_iter=2000))]
    ),
    "Random Forest": Pipeline(
        steps=[("preprocessor", preprocessor), ("model", RandomForestClassifier(n_estimators=400))]
    ),
}

metrics_df, fitted_models = evaluate_models(models, X_train, X_test, y_train, y_test)`
        }
      ]
    },
    {
      slug: "nyc-taxi-demand",
      section: "projects",
      cardType: "Operations Analytics Case Study",
      title: "NYC Taxi Demand and Rider Behavior Analysis",
      artClass: "art-urban",
      badge: "DA",
      technologies: ["Jupyter", "pandas", "matplotlib"],
      landingSummary:
        "Transportation analytics project using trip-level taxi data to examine demand patterns, route concentration, fare drivers, and the limits of baseline prediction in an operational setting.",
      repoUrl: "https://github.com/austi20/NYC-Taxi-Demand-and-Rider-Behavior-Analysis",
      detailPage: "nyc-taxi-demand.html",
      heroSummary:
        "A transportation analytics case study that examines when taxi demand rises, which routes are busiest, and what trip data can realistically predict about fares, duration, and tipping.",
      executiveSummary:
        "This project analyzes a January 2023 sample of NYC yellow taxi trips to understand rider behavior and service demand. I combined descriptive analysis, route exploration, and baseline predictive models to identify clear demand patterns, confirm that distance strongly shapes fares, and show that tipping is much harder to predict with a limited feature set.",
      atAGlance: [
        {
          label: "Problem",
          value: "Understand demand, rider behavior, and predictable trip outcomes"
        },
        {
          label: "Methods",
          value: "Exploratory analysis, route aggregation, regression, classification"
        },
        {
          label: "Outcome",
          value: "Clear demand patterns surfaced, but tipping remained difficult to predict"
        }
      ],
      overview: {
        paragraphs: [
          "Taxi trip data can help answer practical operations questions: when does demand spike, which routes repeat most often, and which outcomes are easy to estimate from trip details?",
          "This project presents that work as an applied case study for a general audience, turning a notebook-heavy analysis into a clearer business and operations narrative."
        ]
      },
      objective: {
        paragraphs: [
          "The objective was to understand how time, location, distance, and rider choices relate to taxi demand, trip duration, fares, and tipping outcomes.",
          "The project was designed to separate what the data explains well from what it does not explain well."
        ],
        bullets: [
          "Identify when demand is strongest across the day and week",
          "Find the routes that appear most often in the sample",
          "Test whether trip-level data can support useful baseline predictions"
        ]
      },
      dataset: {
        paragraphs: [
          "The repository uses a January 2023 sample of NYC yellow taxi trips plus a taxi zone lookup table that translates location IDs into recognizable pickup and drop-off areas.",
          "The notebook focuses specifically on January 1 through January 14, 2023, so the findings should be read as a short-window case study rather than a full-year summary of citywide taxi demand."
        ],
        bullets: [
          "Trip-level records with pickup time, distance, fare, passenger count, tip amount, and location IDs",
          "Taxi zone lookup file for mapping route endpoints",
          "Important limitation: short analysis window limits broader seasonal conclusions"
        ]
      },
      approach: {
        paragraphs: [
          "I structured the work in layers so the page remains easy to skim: first describe the trip patterns, then test a few targeted predictive questions.",
          "That approach makes it easier for a nontechnical reader to understand what the project learned before seeing any code."
        ],
        steps: [
          {
            title: "Map demand and route concentration",
            description:
              "I grouped trips by hour, day, weekday versus weekend, and pickup/drop-off pair to show where demand was concentrated and which routes repeated most often."
          },
          {
            title: "Build simple predictive baselines",
            description:
              "I used baseline regression and classification models to test how much the trip-level features could explain fare amount, trip duration, and tip behavior."
          },
          {
            title: "Interpret the limits of the data",
            description:
              "A key part of the project was showing where the models were informative and where the available variables were not strong enough to support reliable predictions."
          }
        ]
      },
      results: {
        paragraphs: [
          "The analysis produced a strong operational read on demand and route behavior, but the predictive results were mixed in a useful way.",
          "That mix is important because it shows judgment: some business questions were answered clearly, while others would need richer data before being used for decisions."
        ],
        highlights: [
          {
            label: "Demand visibility",
            value: "Strong hour and day patterns",
            description:
              "The data clearly showed when trips cluster, which is useful for staffing, availability planning, and understanding weekday versus weekend demand."
          },
          {
            label: "Fare modeling",
            value: "Distance was the strongest driver",
            description:
              "The fare model confirmed that trip distance carries most of the pricing signal in this sample, making it a strong baseline business variable."
          },
          {
            label: "Tip prediction",
            value: "Weak baseline performance",
            description:
              "The tipping model only performed slightly above chance, which suggests that rider payment and tipping behavior need richer features before they can be modeled confidently."
          }
        ]
      },
      insights: {
        paragraphs: [
          "The value of this project is not just that it found patterns, but that it clearly separated reliable signals from weak ones."
        ],
        bullets: [
          "Demand patterns were clear enough to support staffing and availability planning.",
          "A relatively small set of routes appeared repeatedly, suggesting traffic was concentrated in a few common corridors.",
          "Distance worked well as a baseline input for fare estimation, but error remained too wide for exact quoting.",
          "Trip duration and tipping both exposed the limits of the short-window feature set.",
          "Why this matters: the project shows when simple models are useful and when they should stay in a decision-support role."
        ]
      },
      visualSections: [
        {
          placement: "after-approach",
          title: "Trip pattern snapshot",
          intro:
            "This figure works best right after the approach because it shows the basic relationship the duration analysis was trying to capture before discussing model limits.",
          figures: [
            {
              src: "../assets/projects/nyc-taxi-demand/trip-duration-vs-distance.png",
              alt: "Scatter plot of taxi trip duration in minutes versus trip distance in miles with a regression line.",
              title: "Distance versus duration",
              caption:
                "This plot shows that longer trips usually take more time, but there is still a wide spread for many distances because traffic and route conditions vary. It matters because distance is a helpful baseline feature without being enough to predict duration precisely on its own."
            }
          ]
        },
        {
          placement: "after-results",
          title: "Fare regression check",
          intro:
            "I placed this diagnostic view after the results because it supports the claim that distance carries useful signal while still leaving visible error in the baseline model.",
          figures: [
            {
              src: "../assets/projects/nyc-taxi-demand/trip-distance-regression-diagnostics.png",
              alt: "Regression diagnostics for taxi fare versus trip distance showing fitted values, residuals, and partial regression plots.",
              title: "Distance as a pricing signal",
              caption:
                "These diagnostics show a clear positive link between trip distance and fare, but they also reveal noise and some large misses around the trend line. That matters because the regression is useful for direction and baseline pricing logic, not for treating every estimate as exact."
            }
          ]
        }
      ],
      repository: {
        paragraphs: [
          "The repository contains the notebook, setup notes, and supporting files behind the analysis. The repo link remains available for anyone who wants to inspect the original workflow in detail."
        ]
      },
      nextSteps: {
        paragraphs: [
          "The clearest improvement path is to make the analysis more operational and less limited by the short time window."
        ],
        bullets: [
          "Expand from a short January sample to a longer time horizon",
          "Add richer location, route, and payment features to improve predictive models",
          "Separate exploratory analysis from predictive modeling into cleaner modules",
          "Test more flexible models after establishing stronger baseline features"
        ]
      },
      plainOverview:
        "This project studies how taxi rides behave across New York City by looking at when trips happen, which routes are busiest, how fares change, and how well basic models can predict trip outcomes. The page below turns the notebook into a clearer story for readers who are not used to browsing notebooks or GitHub files.",
      quickFacts: [
        { label: "Time window", value: "January 1-14, 2023" },
        { label: "Main sections", value: "5 analysis tracks" },
        { label: "Focus", value: "Demand, fares, trips, and tipping" }
      ],
      findingsHeading: "Key findings",
      findings: [
        "Demand changed noticeably by hour of day and between weekdays and weekends.",
        "A relatively small number of pickup and drop-off pairs accounted for many of the most common trips.",
        "Fare amount was strongly connected to trip distance in the sample.",
        "Trip duration was moderately predictable with a few trip-level features.",
        "Tipping behavior was much harder to predict, suggesting the initial feature set was too limited."
      ],
      readmeSections: [
        {
          title: "What question the project answers",
          paragraphs: [
            "The team asked how time, distance, location, and rider choices relate to taxi demand, fare amounts, trip duration, and tipping in a short NYC sample.",
            "Instead of treating the notebook like a code dump, this project organizes the work into route analysis, time-based demand analysis, and three baseline predictive models."
          ]
        },
        {
          title: "What data is included",
          paragraphs: [
            "The repository uses a January 2023 yellow taxi trip sample and a taxi zone lookup table.",
            "The README is careful about scope: the analysis covers only January 1 through January 14, so the conclusions are useful as a case study, not as a full-year summary of NYC traffic."
          ]
        },
        {
          title: "How the analysis is structured",
          bullets: [
            "Route popularity and network-style route exploration",
            "Hourly, daily, and weekday-versus-weekend demand views",
            "Tip classification with logistic regression",
            "Fare and trip-duration regression models"
          ]
        },
        {
          title: "What a recruiter should know",
          paragraphs: [
            "One of the strongest parts of this project is its honesty about limitations. The write-up explains where the models are only baseline estimates and where the short time window restricts broader claims."
          ]
        }
      ],
      snippets: [
        {
          title: "Finding the busiest taxi routes",
          language: "python",
          explanation:
            "This is the core grouping step behind the route analysis. It counts how often each pickup and drop-off pair appears, then sorts the busiest connections to the top.",
          code: `trip_counts = df.groupby(["PULocationID", "DOLocationID"]).size()
popular_routes = trip_counts.sort_values(ascending=False).reset_index(name="count")

display(popular_routes.head(20))`
        },
        {
          title: "Baseline tipping model",
          language: "python",
          explanation:
            "The tipping model uses a simple pipeline: prepare numeric and categorical features, fit logistic regression, and evaluate whether the features are enough to separate tipped trips from untipped ones.",
          code: `tip_clf = sklearn.pipeline.Pipeline(steps=[
    ("prep", sklearn.compose.ColumnTransformer(
        transformers=[
            ("num", sklearn.preprocessing.StandardScaler(), num_features),
            ("cat", sklearn.preprocessing.OneHotEncoder(handle_unknown="ignore"), cat_features),
        ]
    )),
    ("model", sklearn.linear_model.LogisticRegression(max_iter=1000)),
])

tip_clf.fit(X_train, y_train)`
        }
      ]
    },
    {
      slug: "global-housing-market",
      section: "projects",
      cardType: "Forecasting and Market Analysis",
      title: "Global Housing Market Forecasting",
      artClass: "art-housing",
      badge: "FM",
      technologies: ["Python", "NumPy", "Matplotlib"],
      landingSummary:
        "Cross-country forecasting analysis comparing housing prices, rent pressure, affordability, and GDP trends with a measured approach to long-range projections through 2035.",
      repoUrl: "https://github.com/austi20/Global-Housing-Market-Predictor",
      detailPage: "global-housing-market.html",
      heroSummary:
        "A cross-country housing case study that compares price, rent, affordability, and GDP trends while treating long-range projections as directional decision support rather than exact forecasts.",
      executiveSummary:
        "This project compares housing pressure across more than 60 countries using price, rent, affordability, and GDP indicators from 2015 through 2024. I cleaned the time-series data, visualized the strongest and weakest markets, extended selected trends through 2035 with bounded curve fitting, and focused the write-up on what the analysis suggests, where it is helpful, and where it should not be overinterpreted.",
      atAGlance: [
        {
          label: "Problem",
          value: "Compare housing pressure across markets, not just one country"
        },
        {
          label: "Methods",
          value: "Trend analysis, cross-country comparison, directional extrapolation"
        },
        {
          label: "Outcome",
          value: "Affordability and GDP did not move together as simply as expected"
        }
      ],
      overview: {
        paragraphs: [
          "Housing market pressure is multi-dimensional. High prices, rising rent, weak affordability, and economic growth do not always move in the same direction.",
          "This project was built to compare those forces across many countries and communicate the differences in a way that is easy to review quickly."
        ]
      },
      objective: {
        paragraphs: [
          "The objective was to identify which countries appeared most and least strained on key housing indicators and to explore how those trends might continue if current patterns persisted.",
          "Just as important, the project aimed to show where forecasting becomes fragile and should be treated with caution."
        ],
        bullets: [
          "Compare housing stress across countries using a shared set of indicators",
          "Visualize how top and bottom markets differ over time",
          "Use directional forecasting carefully without overstating precision"
        ]
      },
      dataset: {
        paragraphs: [
          "The analysis is based on a country-level housing dataset covering more than 60 countries from 2015 to 2024. It focuses on four indicators: house price index, affordability ratio, rent index, and GDP growth.",
          "One important limitation is that the CSV used in the notebook is not currently included in the public repository, so the repo functions more as a case-study showcase than a fully reproducible package today."
        ],
        bullets: [
          "Country-level rather than city-level housing data",
          "Four indicators used for comparison: prices, rent, affordability, GDP growth",
          "Directional forecasting extends selected trends through 2035"
        ]
      },
      approach: {
        paragraphs: [
          "The project combines descriptive analysis with cautious extrapolation. That structure helps the reader separate what is observed directly in the data from what is only projected forward.",
          "The emphasis is on comparison and interpretation, not on claiming a production-ready forecast."
        ],
        steps: [
          {
            title: "Clean the country-level time series",
            description:
              "The notebook drops incomplete rows and standardizes the year field so countries can be compared consistently across the same indicators."
          },
          {
            title: "Compare high-pressure and low-pressure markets",
            description:
              "For each metric, the analysis surfaces the countries at the high and low ends and uses side-by-side visualizations to make the differences easier to interpret."
          },
          {
            title: "Extend trends carefully through 2035",
            description:
              "Selected indicators are extrapolated with bounded curve fitting so the project can explore directional movement without presenting the output as a precise market forecast."
          }
        ]
      },
      results: {
        paragraphs: [
          "The strongest result from this project is comparative insight rather than a single forecast number.",
          "Across countries, the analysis showed that housing pressure cannot be explained by GDP growth alone and that some markets appear far more strained on rent and affordability than headline economic growth would suggest."
        ],
        highlights: [
          {
            label: "Market coverage",
            value: "60+ countries",
            description:
              "The project created a broad international comparison, which makes it more useful for pattern recognition than a single-market case study."
          },
          {
            label: "Affordability finding",
            value: "GDP growth was not enough",
            description:
              "Some countries showed stronger economic growth without showing better affordability, which challenges a simple growth-equals-relief narrative."
          },
          {
            label: "Forecast posture",
            value: "Directional, not production-ready",
            description:
              "The project explicitly treats the 2035 projections as interpretive tools rather than as exact forward predictions."
          }
        ]
      },
      insights: {
        paragraphs: [
          "A major strength of this project is that it communicates both findings and limits clearly."
        ],
        bullets: [
          "Country comparisons were more informative than any single projected number.",
          "Top and bottom markets were separated by both typical price level and spread, not just rank order.",
          "Rent outlooks were most useful for comparing relative pressure across markets, not exact future values.",
          "Affordability still failed to move in lockstep with GDP growth.",
          "Why this matters: the project uses forecasting as planning input without presenting it as certainty."
        ]
      },
      visualSections: [
        {
          placement: "after-approach",
          title: "Comparing stronger and weaker housing markets",
          intro:
            "This comparison fits after the approach because it shows how the project separated high-pressure and low-pressure markets before moving into broader conclusions.",
          figures: [
            {
              src: "../assets/projects/global-housing-market/house-price-index-distribution.png",
              alt: "Two box-plot panels comparing house price index distributions for the top five and bottom five countries through 2035.",
              title: "House price spread by market group",
              caption:
                "These box plots compare the spread of projected house price levels in the highest- and lowest-pressure country groups. They matter because they show both rank and volatility, which helps separate consistently expensive markets from markets that swing more widely."
            }
          ]
        }
      ],
      repository: {
        paragraphs: [
          "The repository contains the notebook and presentation deck used for the project. The GitHub link remains available for anyone who wants to review the original exploratory workflow."
        ]
      },
      nextSteps: {
        paragraphs: [
          "The strongest next step would be to make the project more reproducible and use forecasting methods that better match housing data behavior."
        ],
        bullets: [
          "Add the source dataset or document a clean public download path",
          "Move from directional curve fitting to stronger time-series modeling approaches",
          "Add city-level or regional granularity where available",
          "Create a cleaner separation between descriptive comparison and forecasting outputs"
        ]
      },
      plainOverview:
        "This project compares housing pressure across dozens of countries using price, rent, affordability, and GDP data. It mixes descriptive analysis with forward-looking projections through 2035, but it also makes clear that the forecast output should be used for interpretation rather than as a precise prediction tool.",
      quickFacts: [
        { label: "Coverage", value: "60+ countries" },
        { label: "Base years", value: "2015-2024" },
        { label: "Projection horizon", value: "Through 2035" }
      ],
      findingsHeading: "Main takeaways",
      findings: [
        "High GDP growth did not automatically mean housing was becoming more affordable.",
        "Rent pressure appeared to rise fastest in some supply-constrained markets.",
        "Country-level housing stress varied widely even when economic growth looked similar.",
        "Forecast results were highly sensitive to model choice, so the project avoids overclaiming."
      ],
      readmeSections: [
        {
          title: "What the project is trying to compare",
          paragraphs: [
            "The notebook compares countries with the highest and lowest pressure on four indicators: house prices, rent levels, affordability, and GDP growth.",
            "It is designed more like an exploratory market comparison than a production forecasting system."
          ]
        },
        {
          title: "Important repository note",
          paragraphs: [
            "The README explains that the CSV used by the notebook is not currently included in the repository. That means the notebook cannot be rerun from start to finish until the dataset is added locally."
          ]
        },
        {
          title: "Method used in the notebook",
          bullets: [
            "Load and clean country-level housing data",
            "Compare top and bottom countries for each metric",
            "Visualize time trends and cross-country differences",
            "Use bounded sine-curve fitting to extend selected trends to 2035"
          ]
        },
        {
          title: "Limits of the forecast",
          paragraphs: [
            "The project explicitly notes that curve fitting can behave poorly when a country does not follow a cyclical pattern. That self-critique makes the analysis more credible because the limitations are part of the presentation."
          ]
        }
      ],
      snippets: [
        {
          title: "Loading and cleaning the housing data",
          language: "python",
          explanation:
            "The notebook starts by loading the country-level dataset and dropping rows that would break the comparisons across years and metrics.",
          code: `housing_data = pd.read_csv("global_housing_market_extended.csv")

housing_data = housing_data.dropna(
    subset=["Country", "Year", "House Price Index", "Affordability Ratio", "Rent Index", "GDP Growth (%)"]
)
housing_data["Year"] = housing_data["Year"].astype(int)`
        },
        {
          title: "Projecting future values with a bounded curve",
          language: "python",
          explanation:
            "This function shows the forecasting idea in the project. It fits a curve to each country's history, then clips future values into a more reasonable range before plotting them.",
          code: `def extrapolate_variable_balanced(df, countries, variable, end_year):
    future_data = []
    for country in countries:
        country_data = df[df["Country"] == country].sort_values("Year")
        years = country_data["Year"].values
        values = country_data[variable].values
        popt, _ = curve_fit(sine_func_balanced, years - years[0], values, maxfev=10000)

        for year in range(years[-1] + 1, end_year + 1):
            predicted = sine_func_balanced(year - years[0], *popt)
            future_data.append({"Country": country, "Year": year, variable: predicted})
    return pd.DataFrame(future_data)`
        }
      ]
    },
    {
      slug: "sql-sales-analysis",
      section: "projects",
      cardType: "Business Intelligence with SQL",
      title: "SQL Sales Analysis with Chinook",
      artClass: "art-sql",
      badge: "SQL",
      technologies: ["SQL", "SQLite", "Data Analysis"],
      landingSummary:
        "SQL reporting case study that turns transactional sales data into clear findings on customer value, market performance, product mix, and support ownership.",
      repoUrl: "https://github.com/austi20/sql-sales-analysis-with-chinook",
      detailPage: "sql-sales-analysis.html",
      heroSummary:
        "A business reporting case study that uses SQL to answer practical sales questions and translate raw transactions into clear findings on customers, markets, products, and support performance.",
      executiveSummary:
        "This project analyzes the Chinook SQLite database as if it were a digital media business. I wrote readable SQL queries using joins, aggregation, a reusable view, a CTE, and a ranking query to identify top customers, strongest markets, leading genres, employee performance, and monthly sales patterns, then explained the results in plain business language.",
      atAGlance: [
        {
          label: "Problem",
          value: "Turn raw sales records into clear business reporting"
        },
        {
          label: "Methods",
          value: "SQL joins, aggregation, reusable views, CTEs, ranking"
        },
        {
          label: "Outcome",
          value: "Top market, genre, customer, and support patterns were surfaced quickly"
        }
      ],
      overview: {
        paragraphs: [
          "Many hiring reviewers understand the business value of SQL faster than they understand technical syntax. This page presents the project as a reporting case study, not just a script of queries.",
          "The analysis shows how structured SQL can move from transactional rows to decisions about markets, customers, products, and employee performance."
        ]
      },
      objective: {
        paragraphs: [
          "The business objective was to answer common sales questions clearly and efficiently using a relational database.",
          "The project was also meant to demonstrate communication: every major query is tied to a business question and an insight, not just a result table."
        ],
        bullets: [
          "Identify the strongest customers, countries, genres, and artists",
          "Review support-rep performance through both customer count and revenue",
          "Summarize monthly sales trends in a way that a nontechnical reviewer can follow"
        ]
      },
      dataset: {
        paragraphs: [
          "The project uses the Chinook SQLite sample database, which represents a digital media store. It contains customers, invoices, invoice lines, tracks, artists, genres, employees, and media types.",
          "In practice, that means the data can connect every purchase back to who bought it, what they bought, where they were billed, and which employee supported the account."
        ],
        bullets: [
          "412 invoices and 2,240 invoice lines analyzed",
          "Customer, product, geography, and employee tables joined together",
          "Total recorded revenue in the database: $2,328.60"
        ]
      },
      approach: {
        paragraphs: [
          "The SQL was written to stay readable and layered. Instead of one oversized query, the project builds a set of understandable reporting blocks.",
          "That structure makes the work easier to review and easier to explain to a stakeholder who cares more about the answer than the syntax."
        ],
        steps: [
          {
            title: "Start with foundational checks",
            description:
              "I first reviewed the shape of the data to confirm row counts, sample records, and the basic relationships between customers, invoices, and products."
          },
          {
            title: "Build reusable reporting logic",
            description:
              "A customer sales summary view and a monthly sales CTE were used to keep repeated logic concise and easier to maintain."
          },
          {
            title: "Translate output into business findings",
            description:
              "Each major query block was tied to a direct question, such as top markets or top genres, and followed by a short interpretation of what the result means."
          }
        ]
      },
      results: {
        paragraphs: [
          "The analysis surfaces a clear commercial picture of the sample business: where revenue is strongest, which products dominate, and how support ownership connects to sales.",
          "Because the output is organized by business question, a reviewer can understand the value quickly without needing to parse SQL line by line."
        ],
        highlights: [
          {
            label: "Top market",
            value: "USA: $523.06",
            description:
              "The United States generated the most revenue in the dataset, making it the clearest lead market in the analysis."
          },
          {
            label: "Top genre",
            value: "Rock: $826.65",
            description:
              "Genre sales showed that Rock was the dominant product category by both units sold and revenue contribution."
          },
          {
            label: "Top support rep",
            value: "Jane Peacock: $833.04",
            description:
              "Employee analysis connected support ownership back to customer revenue, showing Jane Peacock led the team on this measure."
          }
        ]
      },
      insights: {
        paragraphs: [
          "The project is strongest when it connects query output to a practical business story."
        ],
        bullets: [
          "Revenue leadership was clear by country, with the USA materially ahead of the rest of the sample.",
          "Rock dominated the catalog economically, suggesting the product mix was heavily concentrated.",
          "Top customer spending was clustered rather than driven by a single extreme outlier.",
          "Monthly sales were relatively steady, which suggests limited seasonality in this dataset.",
          "Why this matters: SQL becomes more valuable when it supports decisions and communication, not only query correctness."
        ]
      },
      repository: {
        paragraphs: [
          "The repository includes the SQL script, database file, and original README. The repo link stays visible for anyone who wants to review the underlying queries directly."
        ]
      },
      nextSteps: {
        paragraphs: [
          "The next improvement would be to turn the static SQL analysis into a more complete reporting asset."
        ],
        bullets: [
          "Add a lightweight dashboard or visual summary on top of the query outputs",
          "Extend the analysis from revenue to margin or profitability if cost data were available",
          "Add customer segmentation and cohort-style reporting",
          "Automate recurring report generation from the query set"
        ]
      },
      plainOverview:
        "This project shows how SQL can answer common business questions from transactional sales data. Instead of asking a viewer to read a long SQL script directly, this page explains what each query block is trying to learn and what the major results say about the fictional music store in the dataset.",
      quickFacts: [
        { label: "Invoices analyzed", value: "412" },
        { label: "Invoice lines", value: "2,240" },
        { label: "Recorded revenue", value: "$2,328.60" }
      ],
      findingsHeading: "Key findings",
      findings: [
        "The USA was the largest revenue market in the dataset.",
        "Rock was the strongest genre by both units sold and revenue.",
        "Top customer spending was clustered closely together rather than dominated by one outlier.",
        "Jane Peacock led the support team in both customers supported and revenue managed.",
        "Monthly sales were fairly steady, with no extreme spikes."
      ],
      readmeSections: [
        {
          title: "What the SQL project covers",
          paragraphs: [
            "The repository uses the Chinook SQLite database to answer sales questions with readable SQL rather than dashboards or application code.",
            "It is intentionally structured like a business reporting exercise: find the top customers, markets, genres, artists, and months, then explain what the results mean."
          ]
        },
        {
          title: "How the database is used",
          paragraphs: [
            "The analysis joins customers, invoices, invoice lines, tracks, artists, genres, employees, and media types so the results can move from raw transactions to business insight."
          ]
        },
        {
          title: "Important README content",
          bullets: [
            "Uses SELECT, WHERE, ORDER BY, GROUP BY, JOIN, a VIEW, a CTE, and a window function",
            "Keeps the SQL readable and organized by business question",
            "Includes short notes after queries so results are easy to interpret"
          ]
        },
        {
          title: "Why this is useful in a portfolio",
          paragraphs: [
            "The project demonstrates that the work does not stop at writing a correct query. It also explains the result in business terms, which is what most non-technical reviewers care about."
          ]
        }
      ],
      snippets: [
        {
          title: "Reusable customer sales summary",
          language: "sql",
          explanation:
            "This view creates one row per customer with total spending and invoice count, which makes later reporting queries much simpler to read and reuse.",
          code: `CREATE VIEW customer_sales_summary AS
SELECT
    c.CustomerId,
    c.FirstName || " " || c.LastName AS customer_name,
    c.Country,
    ROUND(SUM(i.Total), 2) AS total_spent,
    COUNT(i.InvoiceId) AS invoice_count
FROM Customer AS c
JOIN Invoice AS i
    ON c.CustomerId = i.CustomerId
GROUP BY c.CustomerId, c.FirstName, c.LastName, c.Country;`
        },
        {
          title: "Monthly revenue with a CTE",
          language: "sql",
          explanation:
            "The monthly sales query uses a common table expression so the summary logic stays clear before the final ranking step.",
          code: `WITH monthly_sales AS (
    SELECT
        strftime('%Y-%m', InvoiceDate) AS sales_month,
        ROUND(SUM(Total), 2) AS monthly_revenue,
        COUNT(*) AS invoice_count
    FROM Invoice
    GROUP BY strftime('%Y-%m', InvoiceDate)
)
SELECT sales_month, monthly_revenue, invoice_count
FROM monthly_sales
ORDER BY monthly_revenue DESC;`
        }
      ]
    },
    {
      slug: "cse331-coursework",
      section: "coursework",
      cardType: "Software Engineering Foundations",
      title: "CSE 331 Coursework Repository",
      artClass: "art-coursework",
      badge: "CS",
      technologies: ["Python", "Data Structures", "Unit Testing"],
      landingSummary:
        "Python coursework repository covering data structures, testing, and implementation-focused assignments that demonstrate correctness, problem decomposition, and disciplined engineering habits.",
      repoUrl: "https://github.com/austi20/CSE331-SS26",
      detailPage: "cse331-coursework.html",
      heroSummary:
        "A structured repository of data-structure and algorithm assignments presented as evidence of tested implementation skill, careful problem solving, and strong software fundamentals.",
      executiveSummary:
        "This repository collects coursework from CSE 331 at Michigan State University, focused on algorithms and data structures in Python. Rather than treating it like a class archive, this page frames it as proof of implementation discipline: linked lists, hash tables, testing, and assignment-driven problem solving, with visible evidence of passing tests and strong project results.",
      atAGlance: [
        {
          label: "Problem",
          value: "Build reliable core data structures and prove correctness"
        },
        {
          label: "Methods",
          value: "Python implementations, tests, assignment specifications"
        },
        {
          label: "Outcome",
          value: "A clear record of foundational software engineering skill"
        }
      ],
      overview: {
        paragraphs: [
          "This repository is different from the other project pages because it is not one application. Instead, it is a portfolio of implementation work that shows how core computer science concepts were translated into working code.",
          "For a recruiter or hiring manager, the value is in the pattern: reading a spec, building the data structure correctly, and verifying the result with tests."
        ]
      },
      objective: {
        paragraphs: [
          "The objective of the coursework was to build strong software foundations through implementation-focused assignments rather than only theory.",
          "From a portfolio perspective, the value is that the repository shows consistency, correctness, and the ability to work through increasingly complex data structure problems."
        ],
        bullets: [
          "Implement classic data structures correctly",
          "Use tests and specifications to validate behavior",
          "Demonstrate disciplined, readable Python problem solving"
        ]
      },
      dataset: {
        paragraphs: [
          "This repository does not use a traditional dataset. Instead, the project materials are assignment specifications, starter files, tests, and finished Python solutions.",
          "That still matters to a reviewer because it shows the inputs and constraints the code was built against, which makes the implementation process easier to evaluate."
        ],
        bullets: [
          "Coding challenges and larger data-structure projects",
          "Specifications, tests, and reflection files included in the repo tree",
          "Visible scoring evidence in project readme files"
        ]
      },
      approach: {
        paragraphs: [
          "The work in this repository is strongest when viewed as a progression of problem-solving maturity rather than as a single deliverable.",
          "Assignments moved from basic pointer and structure operations to more complex hashing and application-style extensions."
        ],
        steps: [
          {
            title: "Implement the required data structures",
            description:
              "Projects included linked-list and hash-table work that required careful control over references, state, insertion, removal, lookup, and resizing behavior."
          },
          {
            title: "Validate behavior with tests",
            description:
              "The repository includes unit tests and scored readme files, which makes correctness visible instead of asking the viewer to trust the implementation on appearance alone."
          },
          {
            title: "Apply the structures to practical tasks",
            description:
              "Later exercises used the data structures in small applications, such as duplicate grouping and fan-chant matching, which shows transfer beyond textbook definitions."
          }
        ]
      },
      results: {
        paragraphs: [
          "The main result of this repository is evidence: the projects show that the code worked under assignment tests and that the complexity of the problems increased over time.",
          "That is especially useful in a portfolio because foundational implementation skill is often harder to display than finished UI work."
        ],
        highlights: [
          {
            label: "Project 1",
            value: "All listed tests passed",
            description:
              "The doubly linked list assignment passed the reported tests for insertion, removal, conversion, searching, reversing, and the application problem."
          },
          {
            label: "Project 3",
            value: "100 / 100",
            description:
              "The hash table project earned full credit, showing strong performance on both core table behavior and the related application tasks."
          },
          {
            label: "Language consistency",
            value: "Python repository",
            description:
              "The repository provides a concentrated view of implementation growth in one language, which makes it easier to review progression and style."
          }
        ]
      },
      insights: {
        paragraphs: [
          "What makes this repository useful in a recruiting context is how clearly it shows software fundamentals."
        ],
        bullets: [
          "The code demonstrates careful handling of low-level structure behavior, not just high-level scripting.",
          "Tests and scoring evidence make correctness more visible than a typical course repo summary would.",
          "The assignments progress from basic structure operations to more advanced hashing and application-style extensions.",
          "The repository shows the ability to read specifications and implement exactly against them.",
          "Why this matters: strong software fundamentals make later analytics, machine learning, and application work more reliable."
        ]
      },
      repository: {
        paragraphs: [
          "The GitHub repository remains available for anyone who wants to inspect the assignment structure, tests, and full solutions in more detail."
        ]
      },
      nextSteps: {
        paragraphs: [
          "The clearest improvement would be to make the repository easier for an outside reviewer to scan without prior course context."
        ],
        bullets: [
          "Add a root-level README that summarizes the strongest assignments and lessons learned",
          "Create a higher-level index of projects, topics, and test results",
          "Add short reflective notes on time complexity and tradeoffs for the major structures",
          "Surface a few representative test cases for faster reviewer understanding"
        ]
      },
      plainOverview:
        "This repository is a structured collection of university programming assignments from CSE 331 at Michigan State. It is less like a single app and more like a record of how core computer science skills were built through implementation work, test-driven validation, and increasingly complex data structure problems.",
      quickFacts: [
        { label: "Course", value: "CSE 331: Algorithms and Data Structures" },
        { label: "Language", value: "Python" },
        { label: "Evidence", value: "Project and challenge test results included" }
      ],
      findingsHeading: "What this repository shows",
      findings: [
        "The work progresses from core linked-list operations to more advanced hash-table based applications.",
        "Assignments include unit tests and scored readme files, which makes correctness visible to reviewers.",
        "The repository demonstrates problem decomposition, data structure design, and disciplined implementation rather than only finished UI projects.",
        "Two visible examples are a doubly linked list project with all listed tests passing and a hash table project that earned full credit in the provided results file."
      ],
      readmeSections: [
        {
          title: "How the repository is organized",
          paragraphs: [
            "The coursework repo is divided into coding challenges and larger projects instead of one top-level README-driven application.",
            "Examples in the tree include a doubly linked list project, a hash table project, tests, specifications, and reflection files."
          ]
        },
        {
          title: "Examples of assignment topics",
          bullets: [
            "Doubly linked list operations such as push, pop, reverse, and multi-level flattening",
            "Hash table design with insertion, lookup, deletion, resizing, and application problems",
            "Unit testing and implementation against assignment specifications"
          ]
        },
        {
          title: "Why this matters for a portfolio",
          paragraphs: [
            "Recruiters often want proof that course knowledge turned into working code. This repository shows that through tested implementations, not just lecture notes or screenshots."
          ]
        },
        {
          title: "Project evidence included in the repo",
          bullets: [
            "Project 1 README reports all listed linked-list tests passing",
            "Project 3 README reports a total score of 100 out of 100",
            "Repository language summary is fully Python"
          ]
        }
      ],
      snippets: [
        {
          title: "A core linked-list insertion method",
          language: "python",
          explanation:
            "This method is small, but it shows the kind of pointer-management work that the course emphasized. It updates head and tail references correctly when values are inserted at either end of the list.",
          code: `def push(self, val, back=True):
    new = Node(val)
    if self.size == 0:
        self.head = self.tail = new
    elif back:
        new.prev = self.tail
        self.tail.next = new
        self.tail = new
    else:
        new.next = self.head
        self.head.prev = new
        self.head = new
    self.size += 1`
        },
        {
          title: "Using a hash table to track duplicate images",
          language: "python",
          explanation:
            "This application problem uses hashing to compare image signatures, then groups duplicate filenames under the first original file that appeared.",
          code: `for hashes, filename in zip(data, filenames):
    rotations = [tuple(hashes[i:] + hashes[:i]) for i in range(len(hashes))]
    signature = str(min(rotations))

    keeper = seen._get(signature)
    if keeper is None:
        seen[signature] = filename
        duplicates[filename] = []
    else:
        duplicates[keeper.value].append(filename)`
        }
      ]
    }
  ];

  window.portfolioProjects = portfolioProjects;
})();
