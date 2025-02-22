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
      asthma_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      bootcamp_registrations: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          organization: string
          role: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          organization: string
          role: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          organization?: string
          role?: string
        }
        Relationships: []
      }
      cancer_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      certificates: {
        Row: {
          answers: Json
          completed_at: string | null
          created_at: string | null
          id: string
          reference_number: string
          score: number
          user_id: string | null
        }
        Insert: {
          answers: Json
          completed_at?: string | null
          created_at?: string | null
          id?: string
          reference_number: string
          score: number
          user_id?: string | null
        }
        Update: {
          answers?: Json
          completed_at?: string | null
          created_at?: string | null
          id?: string
          reference_number?: string
          score?: number
          user_id?: string | null
        }
        Relationships: []
      }
      ckd_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      community_votes: {
        Row: {
          comments: string | null
          created_at: string
          favorite_ai_team: string
          favorite_quantum_team: string
          id: string
          voter_initials: string
        }
        Insert: {
          comments?: string | null
          created_at?: string
          favorite_ai_team: string
          favorite_quantum_team: string
          id?: string
          voter_initials: string
        }
        Update: {
          comments?: string | null
          created_at?: string
          favorite_ai_team?: string
          favorite_quantum_team?: string
          id?: string
          voter_initials?: string
        }
        Relationships: []
      }
      copd_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      dementia_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      depression_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      dmd_amp: {
        Row: {
          amp_id: string
          created_at: string
          id: string
          legal_category: string | null
          name: string
          supplier: string | null
          vmp_id: string | null
        }
        Insert: {
          amp_id: string
          created_at?: string
          id?: string
          legal_category?: string | null
          name: string
          supplier?: string | null
          vmp_id?: string | null
        }
        Update: {
          amp_id?: string
          created_at?: string
          id?: string
          legal_category?: string | null
          name?: string
          supplier?: string | null
          vmp_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dmd_amp_vmp_id_fkey"
            columns: ["vmp_id"]
            isOneToOne: false
            referencedRelation: "dmd_vmp"
            referencedColumns: ["vmp_id"]
          },
        ]
      }
      dmd_medicines: {
        Row: {
          active_ingredients: string[] | null
          controlled_drug_category: string | null
          created_at: string
          description: string | null
          dmd_id: string
          form: string | null
          id: string
          legal_category: string | null
          name: string
          pack_size: string | null
          price_pence: number | null
          strength: string | null
          unit: string | null
          updated_at: string
        }
        Insert: {
          active_ingredients?: string[] | null
          controlled_drug_category?: string | null
          created_at?: string
          description?: string | null
          dmd_id: string
          form?: string | null
          id?: string
          legal_category?: string | null
          name: string
          pack_size?: string | null
          price_pence?: number | null
          strength?: string | null
          unit?: string | null
          updated_at?: string
        }
        Update: {
          active_ingredients?: string[] | null
          controlled_drug_category?: string | null
          created_at?: string
          description?: string | null
          dmd_id?: string
          form?: string | null
          id?: string
          legal_category?: string | null
          name?: string
          pack_size?: string | null
          price_pence?: number | null
          strength?: string | null
          unit?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      dmd_vmp: {
        Row: {
          created_at: string
          form: string | null
          id: string
          name: string
          unit_dose: string | null
          vmp_id: string
          vtm_id: string | null
        }
        Insert: {
          created_at?: string
          form?: string | null
          id?: string
          name: string
          unit_dose?: string | null
          vmp_id: string
          vtm_id?: string | null
        }
        Update: {
          created_at?: string
          form?: string | null
          id?: string
          name?: string
          unit_dose?: string | null
          vmp_id?: string
          vtm_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dmd_vmp_vtm_id_fkey"
            columns: ["vtm_id"]
            isOneToOne: false
            referencedRelation: "dmd_vtm"
            referencedColumns: ["vtm_id"]
          },
        ]
      }
      dmd_vtm: {
        Row: {
          created_at: string
          id: string
          name: string
          vtm_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          vtm_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          vtm_id?: string
        }
        Relationships: []
      }
      domain_payments: {
        Row: {
          created_at: string | null
          current_payment: number
          domain_id: string
          id: string
          potential_lost: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_payment?: number
          domain_id: string
          id?: string
          potential_lost?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_payment?: number
          domain_id?: string
          id?: string
          potential_lost?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      epilepsy_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      feature_requests: {
        Row: {
          categories: string[]
          created_at: string | null
          date: string
          description: string
          email: string | null
          id: string
          impact: string | null
          name: string | null
          priority: string
          title: string
        }
        Insert: {
          categories: string[]
          created_at?: string | null
          date?: string
          description: string
          email?: string | null
          id?: string
          impact?: string | null
          name?: string | null
          priority: string
          title: string
        }
        Update: {
          categories?: string[]
          created_at?: string | null
          date?: string
          description?: string
          email?: string | null
          id?: string
          impact?: string | null
          name?: string | null
          priority?: string
          title?: string
        }
        Relationships: []
      }
      hackathon_scores: {
        Row: {
          ai_total: number
          ai_track_scores: number[]
          combined_total: number
          comments: string | null
          created_at: string
          id: string
          judge_name: string | null
          quantum_total: number
          quantum_track_scores: number[]
          team_name: string
          user_id: string | null
        }
        Insert: {
          ai_total: number
          ai_track_scores: number[]
          combined_total: number
          comments?: string | null
          created_at?: string
          id?: string
          judge_name?: string | null
          quantum_total: number
          quantum_track_scores: number[]
          team_name?: string
          user_id?: string | null
        }
        Update: {
          ai_total?: number
          ai_track_scores?: number[]
          combined_total?: number
          comments?: string | null
          created_at?: string
          id?: string
          judge_name?: string | null
          quantum_total?: number
          quantum_track_scores?: number[]
          team_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string
          ipfs_hash: string | null
          is_generated: boolean | null
          license_type: string | null
          listing_currency: string | null
          listing_price: number | null
          modality: string | null
          payment_schedule: string | null
          recipient_charity: string | null
          recipient_type: string | null
          royalty_percentage: number | null
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url: string
          ipfs_hash?: string | null
          is_generated?: boolean | null
          license_type?: string | null
          listing_currency?: string | null
          listing_price?: number | null
          modality?: string | null
          payment_schedule?: string | null
          recipient_charity?: string | null
          recipient_type?: string | null
          royalty_percentage?: number | null
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string
          ipfs_hash?: string | null
          is_generated?: boolean | null
          license_type?: string | null
          listing_currency?: string | null
          listing_price?: number | null
          modality?: string | null
          payment_schedule?: string | null
          recipient_charity?: string | null
          recipient_type?: string | null
          royalty_percentage?: number | null
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      indicator_progress: {
        Row: {
          assessed_patients: number
          created_at: string | null
          id: string
          indicator_code: string
          total_patients: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          assessed_patients?: number
          created_at?: string | null
          id?: string
          indicator_code: string
          total_patients?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          assessed_patients?: number
          created_at?: string | null
          id?: string
          indicator_code?: string
          total_patients?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      learning_disabilities_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      medical_conversations: {
        Row: {
          category: string | null
          context: string | null
          conversation_text: string
          created_at: string
          id: number
        }
        Insert: {
          category?: string | null
          context?: string | null
          conversation_text: string
          created_at?: string
          id?: number
        }
        Update: {
          category?: string | null
          context?: string | null
          conversation_text?: string
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      medical_tasks: {
        Row: {
          category: string | null
          created_at: string
          id: number
          solution: string
          task_description: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: number
          solution: string
          task_description: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: number
          solution?: string
          task_description?: string
        }
        Relationships: []
      }
      mental_health_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      ndh_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      nhs_qa: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: number
          question: string
          source: string | null
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: number
          question: string
          source?: string | null
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: number
          question?: string
          source?: string | null
        }
        Relationships: []
      }
      osteoporosis_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      page_access: {
        Row: {
          access_password: string
          created_at: string
          id: string
          page_name: string
        }
        Insert: {
          access_password: string
          created_at?: string
          id?: string
          page_name: string
        }
        Update: {
          access_password?: string
          created_at?: string
          id?: string
          page_name?: string
        }
        Relationships: []
      }
      palliative_care_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      patient_encounters: {
        Row: {
          attempt: number | null
          created_at: string | null
          date: string
          ehr_number: string
          ehr_system: string
          encounter_type: string | null
          id: string
          notes: string | null
          other_status: string | null
          staff_initials: string
          status: string
          user_id: string | null
        }
        Insert: {
          attempt?: number | null
          created_at?: string | null
          date: string
          ehr_number: string
          ehr_system: string
          encounter_type?: string | null
          id?: string
          notes?: string | null
          other_status?: string | null
          staff_initials: string
          status: string
          user_id?: string | null
        }
        Update: {
          attempt?: number | null
          created_at?: string | null
          date?: string
          ehr_number?: string
          ehr_system?: string
          encounter_type?: string | null
          id?: string
          notes?: string | null
          other_status?: string | null
          staff_initials?: string
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      patient_tracking: {
        Row: {
          created_at: string | null
          emis_number: string
          encounter_count: number | null
          id: string
          indicator_id: string | null
          status: string
          updated_at: string | null
          user_id: string | null
          week_number: number
          year: number
        }
        Insert: {
          created_at?: string | null
          emis_number: string
          encounter_count?: number | null
          id?: string
          indicator_id?: string | null
          status: string
          updated_at?: string | null
          user_id?: string | null
          week_number: number
          year: number
        }
        Update: {
          created_at?: string | null
          emis_number?: string
          encounter_count?: number | null
          id?: string
          indicator_id?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string | null
          week_number?: number
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "patient_tracking_indicator_id_fkey"
            columns: ["indicator_id"]
            isOneToOne: false
            referencedRelation: "qof_indicators"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          currency: string
          id: string
          status: string
          stripe_payment_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string
          id?: string
          status: string
          stripe_payment_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string
          id?: string
          status?: string
          stripe_payment_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      practice_settings: {
        Row: {
          created_at: string | null
          id: string
          total_patients: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          total_patients: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          total_patients?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email_confirmed: boolean | null
          id: string
          practice_name: string
          preferred_name: string
          sha256_hash: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email_confirmed?: boolean | null
          id: string
          practice_name: string
          preferred_name: string
          sha256_hash: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email_confirmed?: boolean | null
          id?: string
          practice_name?: string
          preferred_name?: string
          sha256_hash?: string
          updated_at?: string
        }
        Relationships: []
      }
      qof_indicators: {
        Row: {
          category: string
          code: string
          created_at: string | null
          id: string
          name: string
          points: number
        }
        Insert: {
          category: string
          code: string
          created_at?: string | null
          id?: string
          name: string
          points: number
        }
        Update: {
          category?: string
          code?: string
          created_at?: string | null
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      qof_points_tracking: {
        Row: {
          created_at: string | null
          id: string
          indicator_code: string
          points: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          indicator_code: string
          points: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          indicator_code?: string
          points?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      qpu_selections: {
        Row: {
          clops: number | null
          created_at: string | null
          error_rate: number | null
          id: string
          n_qubits: number
          processor_family: string | null
          processor_revision: string | null
          qpu_name: string
          status: string
          updated_at: string | null
        }
        Insert: {
          clops?: number | null
          created_at?: string | null
          error_rate?: number | null
          id?: string
          n_qubits: number
          processor_family?: string | null
          processor_revision?: string | null
          qpu_name: string
          status: string
          updated_at?: string | null
        }
        Update: {
          clops?: number | null
          created_at?: string | null
          error_rate?: number | null
          id?: string
          n_qubits?: number
          processor_family?: string | null
          processor_revision?: string | null
          qpu_name?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      rheumatoid_arthritis_indicators: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: string
          name: string
          points: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          id?: string
          name: string
          points: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          points?: number
        }
        Relationships: []
      }
      secrets: {
        Row: {
          created_at: string
          id: string
          name: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          value: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          value?: string
        }
        Relationships: []
      }
      survey_responses: {
        Row: {
          applicability: number | null
          background: string | null
          balance: number | null
          clinical_practice: string | null
          created_at: string
          experience: number | null
          future_topic1: string | null
          future_topic2: string | null
          future_topic3: string | null
          id: string
          improvements: string | null
          location: string | null
          lunch: number | null
          other_location: string | null
          quality: number | null
          user_id: string | null
          worked_well: string | null
        }
        Insert: {
          applicability?: number | null
          background?: string | null
          balance?: number | null
          clinical_practice?: string | null
          created_at?: string
          experience?: number | null
          future_topic1?: string | null
          future_topic2?: string | null
          future_topic3?: string | null
          id?: string
          improvements?: string | null
          location?: string | null
          lunch?: number | null
          other_location?: string | null
          quality?: number | null
          user_id?: string | null
          worked_well?: string | null
        }
        Update: {
          applicability?: number | null
          background?: string | null
          balance?: number | null
          clinical_practice?: string | null
          created_at?: string
          experience?: number | null
          future_topic1?: string | null
          future_topic2?: string | null
          future_topic3?: string | null
          id?: string
          improvements?: string | null
          location?: string | null
          lunch?: number | null
          other_location?: string | null
          quality?: number | null
          user_id?: string | null
          worked_well?: string | null
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
      [_ in never]: never
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
