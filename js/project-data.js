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
        "Built an end-to-end churn modeling workflow on more than 7,000 customer records, engineered retention-focused features, and compared logistic regression and random forest models using ROC AUC, recall, and feature importance analysis.",
      repoUrl: "https://github.com/austi20/Telco-Customer-Churn-Model",
      detailPage: "telco-customer-churn.html",
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
      cardType: "Data Analysis and Modeling",
      title: "NYC Taxi Demand and Rider Behavior Analysis",
      artClass: "art-urban",
      badge: "DA",
      technologies: ["Jupyter", "pandas", "matplotlib"],
      landingSummary:
        "Collaborative analysis of New York taxi demand, fares, tipping behavior, and trip duration using data cleaning, regression, and visualization to identify patterns across time, location, and trip characteristics.",
      repoUrl: "https://github.com/austi20/NYC-Taxi-Demand-and-Rider-Behavior-Analysis",
      detailPage: "nyc-taxi-demand.html",
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
        "Forecasting project exploring long-term rent and housing price trends across multiple countries. The work focused on cleaning time-series data, applying curve-based models, and comparing projected market movement through 2035.",
      repoUrl: "https://github.com/austi20/Global-Housing-Market-Predictor",
      detailPage: "global-housing-market.html",
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
      cardType: "SQL and Sales Analysis",
      title: "SQL Sales Analysis with Chinook",
      artClass: "art-sql",
      badge: "SQL",
      technologies: ["SQL", "SQLite", "Data Analysis"],
      landingSummary:
        "Sales analysis project built on the Chinook SQLite database using joins, filtering, aggregation, a reusable view, monthly revenue reporting, and business-style queries to evaluate customer, country, genre, artist, and support rep performance.",
      repoUrl: "https://github.com/austi20/sql-sales-analysis-with-chinook",
      detailPage: "sql-sales-analysis.html",
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
      cardType: "Algorithms and Data Structures",
      title: "CSE 331 Coursework Repository",
      artClass: "art-coursework",
      badge: "CS",
      technologies: ["Python", "Data Structures", "Unit Testing"],
      landingSummary:
        "A collection of Python coursework covering sorting algorithms, hash maps, unit testing, and implementation-focused programming assignments. It demonstrates correctness, problem decomposition, and a disciplined approach to writing and validating code.",
      repoUrl: "https://github.com/austi20/CSE331-SS26",
      detailPage: "cse331-coursework.html",
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
