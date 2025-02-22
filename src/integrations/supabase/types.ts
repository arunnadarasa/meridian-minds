export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      conditions: {
        Row: {
          created_at: string
          id: string
          name: string
          severity_type: Database["public"]["Enums"]["severity_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          severity_type?: Database["public"]["Enums"]["severity_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          severity_type?: Database["public"]["Enums"]["severity_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      doctors: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string
          f_name: string
          id: string
          l_name: string
          phone: string | null
          postal: string | null
          state: string | null
          updated_at: string
          url: string | null
          user_id: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email: string
          f_name: string
          id?: string
          l_name: string
          phone?: string | null
          postal?: string | null
          state?: string | null
          updated_at?: string
          url?: string | null
          user_id?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string
          f_name?: string
          id?: string
          l_name?: string
          phone?: string | null
          postal?: string | null
          state?: string | null
          updated_at?: string
          url?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      pharmacies: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string
          id: string
          name: string
          phone: string | null
          postal: string | null
          state: string | null
          updated_at: string
          url: string | null
          user_id: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          phone?: string | null
          postal?: string | null
          state?: string | null
          updated_at?: string
          url?: string | null
          user_id?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string | null
          postal?: string | null
          state?: string | null
          updated_at?: string
          url?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      prescriptions: {
        Row: {
          created_at: string
          description: string | null
          doctor_id: string
          dosage: string
          id: string
          info: string | null
          name: string
          pharmacy_id: string | null
          prescription_id: string
          status: Database["public"]["Enums"]["prescription_status"]
          type: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          doctor_id: string
          dosage: string
          id?: string
          info?: string | null
          name: string
          pharmacy_id?: string | null
          prescription_id: string
          status?: Database["public"]["Enums"]["prescription_status"]
          type?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          doctor_id?: string
          dosage?: string
          id?: string
          info?: string | null
          name?: string
          pharmacy_id?: string | null
          prescription_id?: string
          status?: Database["public"]["Enums"]["prescription_status"]
          type?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prescriptions_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescriptions_pharmacy_id_fkey"
            columns: ["pharmacy_id"]
            isOneToOne: false
            referencedRelation: "pharmacies"
            referencedColumns: ["id"]
          },
        ]
      }
      user_data: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          country: string | null
          created_at: string
          f_name: string | null
          id: string
          l_name: string | null
          language: string | null
          other_names: string | null
          phone: string | null
          postal: string | null
          state: string | null
          updated_at: string
          user_id: string | null
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          f_name?: string | null
          id?: string
          l_name?: string | null
          language?: string | null
          other_names?: string | null
          phone?: string | null
          postal?: string | null
          state?: string | null
          updated_at?: string
          user_id?: string | null
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          f_name?: string | null
          id?: string
          l_name?: string | null
          language?: string | null
          other_names?: string | null
          phone?: string | null
          postal?: string | null
          state?: string | null
          updated_at?: string
          user_id?: string | null
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      prescription_status:
        | "To Be Dispensed"
        | "With Dispenser"
        | "Dispensed"
        | "Claimed"
      severity_type: "Low" | "Medium" | "High" | "Critical"
      user_type: "patient" | "doctor" | "pharmacy"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
