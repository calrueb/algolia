Question 1: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

    Records
    Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

### Answer 1

Hi George,

No worries, I am happy to go over each of these topics in more detail.

**Records**: A record in Algolia is your data formatted in key value pairs as JSON. Records contain all information needed to power relevant searches for your users. For more information about records, including an example, take a look at this [page](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/#algolia-records).

**Indexing**: Indexing is the act of processing your records, so that they can be quickly and efficiently searched. The output of indexing a set of records is an "index" which is a term you will see across your Algolia dashboard. You can think of an index as a set of records that are ready to be searched.

**Custom Ranking**: The best fields to include in custom rankings are the ones which make it possible to compare the value of two similar records. A good example of this is if an online store sells multiple T-shirts then when a potential customer searches "shirt" the store could use a metric like _popularity_ or _number of sales_ to place the best selling T-shirt at the top of the results. For a lot more information about custom ranking take a look at this [guide](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/).

Let me know if you have any more questions.

Cal

Question 2: Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

### Answer 2

Hi Matt,

We love getting all feedback (good and bad) from our customers. I have raised your feedback to our product team. We have been iterating on making our dashboards more streamlined, and less cluttered for common workflows. We plan to continue to make adjustments, and will keep your use case in mind.

Additionally, we do expose [delete index](https://www.algolia.com/doc/api-reference/api-methods/delete-index) and [clear index](https://www.algolia.com/doc/api-reference/api-methods/clear-objects/) in our API. If this is a common part of your workflow you could consider building against these methods. I am happy to help walk you through using our API client if you are interested.

Thanks,
Cal

Question 3: Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

### Answer 3

Hi Leo,

Thanks for reaching out. The amount of development worked needed will vary depending on your exact goals. Through the Algolia UI dashboard you are able to upload your data, build custom search indices, and test the results.

Typically where we see development work needed is the frontend changes to get Algolia onto your website/app. We provide frontend widgets to make this process easier, but some development time is needed depending on the amount of frontend changes you plan to make.

A very high level overview of this process would look like:

1. Upload your data into Algolia. This results in an index of records to be searched
2. Customize the index's behavior. Specify ranking, filtering, and sorting of search results.
3. Add search UI to your website/app which leverages your Algolia index.

We have a [quick start guide](https://www.algolia.com/doc/guides/getting-started/quick-start/) which will walk you through this process in much more detail, and you are welcome to test Algolia's capabilities via our free tier pricing.

Let me know if you have any more questions.

Cal
