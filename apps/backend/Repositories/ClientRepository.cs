using System.Net;
using System.Text.Json;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
// using Customers.Api.Contracts.Data;
using FinBud_Backend.Dto.Clients;

namespace FinBud_Backend.Repositories;

public class ClientRepository : IClientRepository
{
    private readonly IAmazonDynamoDB _dynamoDb;
    private readonly string _tableName;

    public ClientRepository(IAmazonDynamoDB dynamoDb, string tableName)
    {
        _dynamoDb = dynamoDb;
        _tableName = tableName;
    }

    public async Task<bool> CreateAsync(ClientDto clientDto)
    {
        var clientAsJson = JsonSerializer.Serialize(clientDto);
        var itemAsDocument = Document.FromJson(clientAsJson);
        var itemAsAttributes = itemAsDocument.ToAttributeMap();
        var createItemRequest = new PutItemRequest
        {
            TableName = _tableName,
            Item = itemAsAttributes
        };

        var response = await _dynamoDb.PutItemAsync(createItemRequest);
        return response.HttpStatusCode == HttpStatusCode.OK;
    }

    public async Task<ClientDto?> GetAsync(string id)
    {
        var getItemRequest = new GetItemRequest
        {
            TableName = _tableName,
            Key = new Dictionary<string, AttributeValue>()
            {
                { "pk", new AttributeValue { S = id } },
                { "sk", new AttributeValue { S = id } }
            },
            ConsistentRead = true
        };

        var response = await _dynamoDb.GetItemAsync(getItemRequest);
        if (response.Item.Count == 0)
        {
            return null;
        }

        var itemAsDocument = Document.FromAttributeMap(response.Item);
        return JsonSerializer.Deserialize<ClientDto>(itemAsDocument.ToJson());
    }

    public async Task<bool> UpdateAsync(ClientDto client)
    {
        var clientAsJson = JsonSerializer.Serialize(client);
        var itemAsDocument = Document.FromJson(clientAsJson);
        var itemAsAttributes = itemAsDocument.ToAttributeMap();
        var updateItemRequest = new PutItemRequest
        {
            TableName = _tableName,
            Item = itemAsAttributes
        };

        var response = await _dynamoDb.PutItemAsync(updateItemRequest);
        return response.HttpStatusCode == HttpStatusCode.OK;
    }

    // public async Task<bool> DeleteAsync(Guid id)
    // {
    //     var deleteItemRequest = new DeleteItemRequest
    //     {
    //         TableName = _tableName,
    //         Key = new Dictionary<string, AttributeValue>()
    //         {
    //             { "pk", new AttributeValue { S = id.ToString() } },
    //             { "sk", new AttributeValue { S = id.ToString() } }
    //         }
    //     };
    //     var response = await _dynamoDb.DeleteItemAsync(deleteItemRequest);
    //     return response.HttpStatusCode == HttpStatusCode.OK;
    // }
}
