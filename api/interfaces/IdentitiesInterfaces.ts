/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

"use strict";



/**
 * Container class for changed identities
 */
export interface ChangedIdentities {
    /**
     * Changed Identities
     */
    identities: Identity[];
    /**
     * Last Identity SequenceId
     */
    sequenceContext: ChangedIdentitiesContext;
}

/**
 * Context class for changed identities
 */
export interface ChangedIdentitiesContext {
    /**
     * Last Group SequenceId
     */
    groupSequenceId: number;
    /**
     * Last Identity SequenceId
     */
    identitySequenceId: number;
}

export interface CreateScopeInfo {
    adminGroupDescription: string;
    adminGroupName: string;
    creatorId: string;
    parentScopeId: string;
    scopeName: string;
    scopeType: GroupScopeType;
}

export interface FrameworkIdentityInfo {
    displayName: string;
    identifier: string;
    identityType: FrameworkIdentityType;
    role: string;
}

export enum FrameworkIdentityType {
    None = 0,
    ServiceIdentity = 1,
    AggregateIdentity = 2,
    ImportedIdentity = 3,
}

export interface GroupMembership {
    active: boolean;
    descriptor: IdentityDescriptor;
    id: string;
    queriedId: string;
}

export enum GroupScopeType {
    Generic = 0,
    ServiceHost = 1,
    TeamProject = 2,
}

export interface Identity {
    /**
     * The custom display name for the identity (if any). Setting this property to an empty string will clear the existing custom display name. Setting this property to null will not affect the existing persisted value (since null values do not get sent over the wire or to the database)
     */
    customDisplayName: string;
    descriptor: IdentityDescriptor;
    id: string;
    isActive: boolean;
    isContainer: boolean;
    masterId: string;
    memberIds: string[];
    memberOf: IdentityDescriptor[];
    members: IdentityDescriptor[];
    metaTypeId: number;
    properties: any;
    /**
     * The display name for the identity as specified by the source identity provider.
     */
    providerDisplayName: string;
    resourceVersion: number;
    subjectDescriptor: string;
    uniqueUserId: number;
}

export interface IdentityBatchInfo {
    descriptors: IdentityDescriptor[];
    identityIds: string[];
    includeRestrictedVisibility: boolean;
    propertyNames: string[];
    queryMembership: QueryMembership;
}

/**
 * An Identity descriptor is a wrapper for the identity type (Windows SID, Passport) along with a unique identifier such as the SID or PUID.
 */
export interface IdentityDescriptor {
    /**
     * The unique identifier for this identity, not exceeding 256 chars, which will be persisted.
     */
    identifier: string;
    /**
     * Type of descriptor (for example, Windows, Passport, etc.).
     */
    identityType: string;
}

export interface IdentityScope {
    administrators: IdentityDescriptor;
    id: string;
    isActive: boolean;
    isGlobal: boolean;
    localScopeId: string;
    name: string;
    parentId: string;
    scopeType: GroupScopeType;
    securingHostId: string;
    subjectDescriptor: string;
}

export interface IdentitySelf {
    accountName: string;
    displayName: string;
    id: string;
    tenants: TenantInfo[];
}

export interface IdentitySnapshot {
    groups: Identity[];
    identityIds: string[];
    memberships: GroupMembership[];
    scopeId: string;
    scopes: IdentityScope[];
}

export interface IdentityUpdateData {
    id: string;
    index: number;
    updated: boolean;
}

export enum QueryMembership {
    /**
     * Query will not return any membership data
     */
    None = 0,
    /**
     * Query will return only direct membership data
     */
    Direct = 1,
    /**
     * Query will return expanded membership data
     */
    Expanded = 2,
    /**
     * Query will return expanded up membership data (parents only)
     */
    ExpandedUp = 3,
    /**
     * Query will return expanded down membership data (children only)
     */
    ExpandedDown = 4,
}

export enum ReadIdentitiesOptions {
    None = 0,
    FilterIllegalMemberships = 1,
}

export interface TenantInfo {
    homeTenant: boolean;
    tenantId: string;
    tenantName: string;
}

export var TypeInfo = {
    CreateScopeInfo: <any>{
    },
    FrameworkIdentityInfo: <any>{
    },
    FrameworkIdentityType: {
        enumValues: {
            "none": 0,
            "serviceIdentity": 1,
            "aggregateIdentity": 2,
            "importedIdentity": 3
        }
    },
    GroupScopeType: {
        enumValues: {
            "generic": 0,
            "serviceHost": 1,
            "teamProject": 2
        }
    },
    IdentityBatchInfo: <any>{
    },
    IdentityScope: <any>{
    },
    IdentitySnapshot: <any>{
    },
    QueryMembership: {
        enumValues: {
            "none": 0,
            "direct": 1,
            "expanded": 2,
            "expandedUp": 3,
            "expandedDown": 4
        }
    },
    ReadIdentitiesOptions: {
        enumValues: {
            "none": 0,
            "filterIllegalMemberships": 1
        }
    },
};

TypeInfo.CreateScopeInfo.fields = {
    scopeType: {
        enumType: TypeInfo.GroupScopeType
    }
};

TypeInfo.FrameworkIdentityInfo.fields = {
    identityType: {
        enumType: TypeInfo.FrameworkIdentityType
    }
};

TypeInfo.IdentityBatchInfo.fields = {
    queryMembership: {
        enumType: TypeInfo.QueryMembership
    }
};

TypeInfo.IdentityScope.fields = {
    scopeType: {
        enumType: TypeInfo.GroupScopeType
    }
};

TypeInfo.IdentitySnapshot.fields = {
    scopes: {
        isArray: true,
        typeInfo: TypeInfo.IdentityScope
    }
};