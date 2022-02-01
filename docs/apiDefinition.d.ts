// === REST API approach ===

/**
 * Api endpoint: GET: api/users/{{userId}}
 */

interface GetUserDetailsResponse {
  data: {
    // ...can be other details
    companies: {
      name: string;
      id: string;
    }[];
  }[];
  error: boolean;
}

/**
 * Api endpoint: GET: api/cards?companyId={{companyId}}&detailsLevel={{detailsLevel}}
 */

interface GetCompanyCardsResponse {
  data: {
    id: string;
    availableBalance: number;
    totalBalance: number;
    currency: "SEK" | "USD";
    invoiceDue?: {
      id: string;
    };
  }[];
  error: boolean;
}

/**
 * Api endpoint: GET: api/cards/{{cardId}}transactions?offset={{offset}}&limit={{limit}}
 */

interface GetCardTransactionsResponse {
  data: {
    items: {
      id: string;
      date: string;
      description: string;
    }[];
    limit: number;
    offset: number;
    total: number;
  };
  error: boolean;
}

// === GRAPHQL approach ===

/**
 * Query: getUserDetails
 */

interface GetUserDetailsQueryResponse {
  data: {
    // ...can be other details
    companies: {
      name: string;
      id: string;
    }[];
  };
}

/**
 * Query: getCompanyDetails
 */

interface GetCompanyDetailsQueryResponse {
  data: {
    // ...can be other details
    cards: {
      id: string;
      availableBalance: number;
      totalBalance: number;
      currency: "SEK" | "USD";
      invoiceDue?: {
        id: string;
      };
      latestTransactions: {
        totalCount: number;
        items: {
          id: string;
          date: string;
          description: string;
        }[];
      };
    }[];
  };
}
